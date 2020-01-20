import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-crear-noticia",
  templateUrl: "./crear-noticia.component.html",
  styleUrls: ["./crear-noticia.component.css"]
})
export class CrearNoticiaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public imagePath;
  imgURL: any;
  public message: string;

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
