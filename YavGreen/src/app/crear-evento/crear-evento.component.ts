import { Component, OnInit } from "@angular/core";
import { isFormattedError } from '@angular/compiler';

@Component({
  selector: "app-crear-evento",
  templateUrl: "./crear-evento.component.html",
  styleUrls: ["./crear-evento.component.css"]
})
export class CrearEventoComponent implements OnInit {
  titulo: string;
  qrcodename: number;
  title = "generate-qrcode";
  elementType: "url" | "canvas" | "img" = "url";
  value: string;
  display = false;
  href: string;
  codigo: string;
  evaluar() {
    if (this.qrcodename <= 100 && this.qrcodename >= 50) {
    } else {
      alert("Solo puede ingresar un valor entre 50 y 100 puntos");
      this.qrcodename = null;
    }
  }
  generateQRCode() {
    if (this.qrcodename <= 100 && this.qrcodename >= 50) {
      var abecedario = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ];
      var str = "";
      for (var i = 1; i <= 5; i++) {
        str +=
          abecedario[Math.round(Math.random() * (25 - 0) + 0)] +
          Math.round(Math.random() * (3 - 1) + 1);
      }
      if (this.qrcodename == null || this.titulo == null) {
        alert("Los campos deben estar llenos");
        this.display = false;
        return;
      } else {
        this.codigo = str;
        this.value =
          this.titulo + "\n" + this.qrcodename.toString() + "\n" + str;
        this.display = true;
      }
    } else {
      if (this.qrcodename == null || this.titulo == null) {
        alert("Los campos deben estar llenos");
        this.display = false;
      }
      alert("Solo puede ingresar un valor entre 50 y 100 puntos");
      this.qrcodename = null;
    }
    // No borrar este código es para la lectura del QR en el Movil//
    /*
    var nombre = "";
    var puntaje = "";
    var codigo = "";
    var contador = 0;
    for (var i = 0; i < this.value.length; i++) {
      var caracter = this.value.charAt(i);
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
    alert(codigo);*/
  }
  downloadImage() {
    this.href = document.getElementsByTagName("img")[0].src;
  }
  constructor() { }

  ngOnInit() { }
}
