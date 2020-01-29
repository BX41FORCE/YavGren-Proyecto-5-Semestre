import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  public imagePath;
  imgURL: any;
  public message: string;
  valorProducto:number;

  constructor() { }

  ngOnInit() {
  }


  evaluar() {
    console.log(this.valorProducto)
    if (this.valorProducto <= 100 && this.valorProducto >= 50) {
      alert("todo esta bien");
    } else {
      alert("Solo puede ingresar un valor entre 50 y 100 puntos.");
      this.valorProducto = null;
    }
  }

  preview(files) {
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      alert("Solo debe subir archivos de imagen");
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      this.imgURL = reader.result;
    };
  }
  

}
