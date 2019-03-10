import * as humanize from 'humanize';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timeAgo' })
export class TimeAgoPipe implements PipeTransform {
transform(time: number) {
return humanize.relativeTime(time);
}
}