import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-lector-qr',
  templateUrl: './lector-qr.page.html',
  styleUrls: ['./lector-qr.page.scss'],
})
export class LectorQrPage implements OnInit {
  qrData = 'https://ionicacademy.com/';
  scannedCode = null;
  elementType: 'url' | 'canvas' | 'img' = 'canvas';
  constructor(private barcodeScanner: BarcodeScanner, private toastCtrl: ToastController) {

  }

  scanCode() {
    this.barcodeScanner.scan().then(
      barcodeData => {
        this.scannedCode = barcodeData.text;
      }
    )
  }

  codificar() {
    alert("Felicidades se acreditaron tus 100 puntos")
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
    alert(nombre);
    alert(puntaje);
    alert(codigo);
  }

  ngOnInit() {
  }
}