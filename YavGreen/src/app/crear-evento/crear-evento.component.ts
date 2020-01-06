import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent implements OnInit {
  titulo : string;
  qrcodename : number;
  title = 'generate-qrcode';
  elementType: 'url' | 'canvas' | 'img' = 'url';
  value: string;
  display = false;
  href : string;
  generateQRCode(){
    if(this.qrcodename == null || this.titulo == null){
      alert("Los campos deben estar llenos");
      this.display = false;
      return;
    }
    else{
      this.value = this.titulo+"\n"+this.qrcodename.toString();
      this.display = true;
    }
  }
  downloadImage(){
    this.href = document.getElementsByTagName('img')[0].src;
  }
  constructor() { }

  ngOnInit() {
  }

}
