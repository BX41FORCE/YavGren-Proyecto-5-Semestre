import { Component, OnInit } from "@angular/core";

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
  generateQRCode() {
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
    var str = '';
    for (var i = 1; i <= 5; i++) {
      str +=abecedario[Math.round(Math.random() * (25 - 0) + 0)]+Math.round(Math.random()* (3 - 1) + 1);
    }
    document.getElementById('codigo').innerHTML=str;
    alert(str);
    if (this.qrcodename == null || this.titulo == null) {
      alert("Los campos deben estar llenos");
      this.display = false;
      return;
    } else {
      this.value = this.titulo + "\n" + this.qrcodename.toString();
      this.display = true;
    }
  }
  downloadImage() {
    this.href = document.getElementsByTagName("img")[0].src;
  }
  constructor() {}

  ngOnInit() {}
}
