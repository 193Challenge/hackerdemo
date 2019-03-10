import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  apiURL = 'https://www.novatrix.com.br/cobomocorrencias/ocorrencia';

  constructor(private httpClient: HttpClient) {}


  public emergenciaCreate( latitude: any, longitude: any, telefone: any, nome: any, cpf: any, natureza: any, descricao: any) {
    const body = new FormData();
    body.append('latitude', latitude);
    body.append('longitude', longitude);
    body.append('telefone_solicitante', telefone);
    body.append('nome_solicitante' , nome);
    body.append('cpf_solicitante', cpf);
    body.append('natureza', natureza);
    body.append('descricao', descricao);
    console.log(body);
    return this.httpClient.post(`${this.apiURL}`, body).subscribe(resp => {
      console.log(resp);
   });

  }



}
