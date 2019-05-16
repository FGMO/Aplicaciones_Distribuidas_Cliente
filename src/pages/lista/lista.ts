import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {

  // ip:string="192.168.1.12:8080";
  ip:string = "35.247.227.24"
  usuario:any;
  datos:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public cliente:UserServiceProvider, public http: HttpClient) {
    this.getPracticas();
    this.usuario=navParams.get("usuario");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
  }

  public getPracticas() {
    return new Promise(resolve => {
      this.http.get('http://'+this.ip+'/VIS-Vinculacion/srv/practicas/practicas').subscribe(data => {
        resolve(data);
        this.datos = data
      }, err => {
        console.log(err);
      });
    });
  } 

}
