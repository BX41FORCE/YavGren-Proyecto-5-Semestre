import { ImagesService } from './../servicios/images.service';
import { Component, OnInit } from "@angular/core";
import { NoticiasService } from '../servicios/noticias.service';
import { Noticias } from '../models/noticias';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Imagen } from './../models/imagen';


@Component({
  selector: "app-crear-noticia",
  templateUrl: "./crear-noticia.component.html",
  styleUrls: ["./crear-noticia.component.css"]
})
export class CrearNoticiaComponent implements OnInit {
  //variables utilizadas
  public imagePath;
  imgURL: any;
  public message: string;
  imageReturned: any = [];
  isPicture = false;
  srcFoto = '';
  images: Imagen;
  listImage: any = [];
  tituloNotica:string;
  descripcionNoticia:string;

  noticias:Noticias;

// constructor
  constructor(private noticiasService: NoticiasService,private imagesService: ImagesService, private toastr: ToastrService,private router:Router) {
    this.noticias= new Noticias;
    this.images = new Imagen();
    
   }


  ngOnInit() {}

//guardar imagen
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
  //funcion para guardar noticias en la base de datos
  guardarNoticia(){
    this.noticias.id_noticia_persona = 1 ;
    this.noticias.id_imagen_noticia=1; 
    console.log(this.noticias);
    this.noticiasService.postNoticias(this.noticias).then(r => {
      this.noticias = r;
      this.toastr.success(' Exito!', 'Excelente');
      this.noticias = new Noticias;
      this.router.navigate(['/inicio'])
    }).catch(e => {
      this.toastr.error('Ha ocurrido un error!', 'Oops algo ha salido mal');
    });  
}

guardarImagen(){
  this.imagesService.postImages(this.images).then(r => {
    this.images = r;
    this.toastr.success(' Exito!', 'Excelente');
    this.images = new Imagen;
    }).catch(e => {
    this.toastr.error('Ha ocurrido un error!', 'Oops algo ha salido mal');
  });  
}

CodificarArchivo(event) {
  const reader = new FileReader();
  if (event.target.files && event.target.files.length > 0) {
    const file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.images.nombre_imagen = file.name;
      this.images.tipo_imagen = file.type;
      this.images.contenido_imagen = reader.result.toString().split(',')[1];
      this.srcFoto = 'data:' + this.images.tipo_imagen + ';base64,' + this.images.contenido_imagen;
    };
    console.log(this.images)
    }
}





//funcion salir
salir(){
  this.noticias=null;
  this.noticias= new Noticias;
}

}
