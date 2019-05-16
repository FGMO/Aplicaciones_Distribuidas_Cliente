import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserServiceProvider } from '../../providers/user-service/user-service';
import { HttpClient } from '@angular/common/http';

import { ListaPage } from '../lista/lista';
import { RegistroPage } from '../registro/registro';
/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  usuario:any;
  nombre:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public cliente:UserServiceProvider, public http: HttpClient) {
    this.usuario=navParams.get("usuario");
  }

  public listar(){
    this.navCtrl.push(ListaPage);
  }

  public actualizar(){
    this.navCtrl.push(RegistroPage,{
      usuario:this.usuario
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

}
