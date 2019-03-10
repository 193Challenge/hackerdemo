import { ApiService } from './../api.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { async } from '@angular/core/testing';
import { AlertController, ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {Http, Headers, RequestOptions} from '@angular/http';

import { File, FileEntry } from '@ionic-native/File/ngx';
import { HttpClient } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';
 import { Sim } from '@ionic-native/sim/ngx';


const STORAGE_KEY = 'my_images';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.page.html',
  styleUrls: ['./casa.page.scss'],
})

export class CasaPage implements OnInit {
  public base64Image: string;
   position1: any;
   position2: any;
   myNumero: any;
   nome: any;
   sobrenome: any;
   cpf: any;
   myflagfone = false;

   options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };



  constructor(private geolocation: Geolocation, public alertController: AlertController,
              private camera: Camera,
              private http: HttpClient,
              private webview: WebView ,
              private file: File,
              private actionSheetController: ActionSheetController,
              private storage: Storage,
              private filePath: FilePath,
              private toastController: ToastController,
              private ref: ChangeDetectorRef,
              private plt: Platform,
              private loadingController: LoadingController,
              private sim: Sim,
              private service: ApiService              ) {}



  ngOnInit() {


    this.sim.getSimInfo().then(
      (info) => {
        this.myNumero = info.phoneNumber;

        console.log(info.phoneNumber);
        console.log('Sim info: ', this.myNumero);

        if (!this.myNumero || 0 === this.myNumero.length )  {
          this.myflagfone = true;
        }
      },
      (err) => {
        this.myNumero = err;
        console.log('Unable to get sim info: ', err);
      },
    );
    this.sim.hasReadPermission().then(
      (info) => {

        console.log('Has permission: ', info);
      }
    );

    this.sim.requestReadPermission().then(
      () => console.log('Permission granted'),
      () => console.log('Permission denied')
    );






     this.geolocation.getCurrentPosition().then((resp) => {
      this.position1 = resp.coords.latitude;
      this.position2 = resp.coords.longitude;

      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });


  }

  async myposition() {


    const alert = await this.alertController.create({
      header: 'Alert',
      message:  this.position1 + ' ' + ' ' + this.position2 + this.myNumero + this.nome + this.sobrenome + this.cpf ,
      buttons: ['OK']
    });

    await alert.present();

  }


  async myCamera() {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = 'data:image/jpeg;base64,' + imageData;
        console.log(this.base64Image);
    }, (err) => {
        console.log(err);
    });
  }


  async send() {
    const nomes = this.nome + ' ' + this.sobrenome; 
   this.service.emergenciaCreate( this.position1, this.position2,this.myNumero, nomes, this.cpf, 'casa', this.base64Image )

  }

}
