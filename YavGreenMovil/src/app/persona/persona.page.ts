import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from '../servicio/authentication.service';
import { Persona } from '../models/persona';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.page.html',
  styleUrls: ['./persona.page.scss'],
})
export class PersonaPage implements OnInit {
  qrData = 'https://ionicacademy.com/';
  scannedCode = null;
  elementType: 'url' | 'canvas' | 'img' = 'canvas';
  usuario: any = [];
  usuarioId: any;
  usuarioNombre: any;
  usuarioApellido: any;
  usuarioCorreo: any;
  usuarioPuntaje: any;
  personas: Persona;

  constructor(private authenticationService: AuthenticationService, private barcodeScanner: BarcodeScanner, private toastCtrl: ToastController) {
    this.personas = new Persona();
  }

  scanCode() {
    this.barcodeScanner.scan().then(
      barcodeData => {
        this.scannedCode = barcodeData.text;
      }
    )
  }

  actualizarPersona(puntos) {
    var suma = parseInt(this.usuarioPuntaje) + parseInt(puntos);
    this.personas.puntaje_persona = suma;
    this.authenticationService.deletePuntaje();
    this.authenticationService.setPuntaje(suma);
    this.authenticationService.putPersona(this.usuarioId, this.personas).then(r => {
      this.personas = r;
      Swal.fire({
        timer: 1800,
        icon: 'success',
        title: 'Actualizado!',
      })
    }).catch(e => {
      Swal.fire({
        timer: 1800,
        icon: 'error',
        title: 'Error de Comprobación!',
        text: 'Qr incorrecto',
      })
    });
    this.verDatos();
  }

  decodificar() {
    var nombre = "";
    var puntaje = "";
    var codigo = "";
    var contador = 0;
    for (var i = 0; i < this.scannedCode.toString().length; i++) {
      var caracter = this.scannedCode.toString().charAt(i);
      if (caracter == '\n') {
        contador++
      }
      if (contador == 0 && caracter != '\n') {
        nombre += caracter;
      } else if (contador == 1 && caracter != '\n') {
        puntaje += caracter
      } else if (contador == 2 && caracter != '\n') {
        codigo += caracter
      }
    }
    this.actualizarPersona(puntaje);
    setTimeout(function () { location.reload() }, 2000);
  }

  ngOnInit() {
    this.verDatos();
  }

  verDatos() {
    this.usuario = this.authenticationService.getPersonaLS();
    this.usuarioId = this.usuario[0];
    this.usuarioNombre = this.usuario[1];
    this.usuarioApellido = this.usuario[2];
    this.usuarioCorreo = this.usuario[3];
    this.usuarioPuntaje = this.usuario[4];
  };
}
