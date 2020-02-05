import { Component, OnInit } from "@angular/core";
import Swal from 'sweetalert2';
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
      if (this.titulo == null) {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Los campos deben estar llenos.'
        })
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
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Los campos deben estar llenos.'
        })
        this.display = false;
        return;
      }
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Solo puede ingresar un valor entre 50 y 100 puntos.'
      })
      this.display = false;
      this.qrcodename = null;
      this.codigo = null;
      return;
    }
  }
  downloadImage() {
    this.href = document.getElementsByTagName("img")[0].src;
  }
  constructor() { }

  ngOnInit() {
    Swal.fire({
      position: 'top-end',
      icon: 'info',
      title: 'Recuerda Generar y Descargar el Código QR',
      showConfirmButton: false,
      timer: 1800
    })
   }
}
