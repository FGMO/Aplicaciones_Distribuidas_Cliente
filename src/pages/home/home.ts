import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { HttpClient } from '@angular/common/http';
import { PrincipalPage } from '../principal/principal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario:any;
  email:string="admin@ups.edu.ec";
  clave:string="admin";
  // ip:string = "192.168.1.12:8080";
  ip:string = "35.247.227.24"
  constructor(public navCtrl: NavController, public cliente:UserServiceProvider, public http: HttpClient) {
    
  }

 public login() {
    return new Promise(resolve => {
      this.http.get('http://'+this.ip+'/VIS-Vinculacion/srv/practicas/login?email='+this.email+'&clave='+this.clave).subscribe(data => {
        resolve(data);
          // this.navCtrl.push(PrincipalPage);
          this.usuario=data;
          this.navCtrl.push(PrincipalPage, {
            usuario:this.usuario
          });
      }, err => {
        console.log(err);
      });
    });
  } 
  
}
