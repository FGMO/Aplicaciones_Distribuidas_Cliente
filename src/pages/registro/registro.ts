import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserServiceProvider } from '../../providers/user-service/user-service';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  
  users:any;
  usuario:any;
  // ip:string = "192.168.1.12:8080";
  ip:string = "35.247.227.24"

  pprCodigo:number
  pprAprobadoPor:string;
  pprAprobado:string;
  pprEstadoResolucion:string;
  pprFechaInscripcion:Date;
  pprFechaAprobacion:Date;
  pprFechaAcreditacion:Date;
  pprNumeroResolucion:string;
  pprNumeroActa:string;
  pprObservaciones:string;
  pprTotalHoras:number;
  aluCodigo:number;
  tppCodigo:number;
  tppDescripcion:string;
  aluCedula:string="0302612866";
  aluNombres:string;
  aluApellidos:string;
  audModificado:string;
  audFechaModificado:string;
  audAccion:string;
  alumno:any;
  tipo:any;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public cliente:UserServiceProvider, public http: HttpClient) {
    this.usuario=navParams.get("usuario");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  public leer(){
    this.getPasantia()
  }

  public actualizar(){
    this.sendPutRequest()
  }

  getPasantia() {
    return new Promise(resolve => {
      this.http.get('http://'+this.ip+'/VIS-Vinculacion/srv/practicas/leerCedulaPractica?cedula='+this.aluCedula).subscribe(data => {
        resolve(data);
        this.tipo=data['tppCodigo'];
        this.alumno=data['aluCodigo'];
        this.pprCodigo=data['pprCodigo'];
        this.pprAprobadoPor=data['pprAprobadoPor'];
        this.pprAprobado=data['pprAprobado'];
        this.pprEstadoResolucion=data['pprEstadoResolucion'];
        this.pprFechaInscripcion=data['pprFechaInscripcion'];
        this.pprFechaAprobacion=data['pprFechaAprobacion'];
        this.pprFechaAcreditacion=data['pprFechaAcreditacion'];
        this.pprNumeroResolucion=data['pprNumeroResolucion'];
        this.pprNumeroActa=data['pprNumeroActa'];
        this.pprObservaciones=data['pprObservaciones'];
        this.pprTotalHoras=data['pprTotalHoras'];
        this.aluCodigo=this.alumno['aluCodigo'];
        this.tppCodigo=this.tipo['tppCodigo'];
        this.tppDescripcion=this.tipo['tppDescripcion'];
        this.aluCedula=this.alumno['aluCedula'];
        this.aluNombres=this.alumno['aluNombres'];
        this.aluApellidos=this.alumno['aluApellidos'];
      }, err => {
        console.log(err);
      });
    });
  } 

  sendPutRequest() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );

    let postData = {
        "pprCodigo":this.pprCodigo,
        "pprAprobadoPor":this.pprAprobadoPor,
        "pprAprobado":this.pprAprobado,
        "pprEstadoResolucion":this.pprEstadoResolucion,
        "pprFechaInscripcion":this.pprFechaInscripcion,
        "pprFechaAprobacion":this.pprFechaAprobacion,
        "pprFechaAcreditacion":this.pprFechaAcreditacion,
        "pprNumeroResolucion":this.pprNumeroResolucion,
        "pprNumeroActa":this.pprNumeroActa,
        "pprObservaciones":this.pprObservaciones,
        "pprTotalHoras":this.pprTotalHoras,
        "aluCodigo":{"aluCodigo":this.alumno['aluCodigo']},
        "tppCodigo":{"tppCodigo":this.tipo['tppCodigo']},
        "audModificado":this.usuario['nombre'],
        "audFechaModificado":"07/02/2019",
        "audAccion":"Actualizo"
    }
    this.http.put("http://"+this.ip+"/VIS-Vinculacion/srv/practicas/actualizar", postData, {})
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }

}
