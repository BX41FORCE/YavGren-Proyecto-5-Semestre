import { Noticias } from '../models/noticias'
import { NoticiasService} from '../servicio/noticias.service'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
})
export class NoticiaPage implements OnInit {
  noticia:Noticias;
  noticias: any = [];

  constructor(private noticiasServices:NoticiasService) {
    this.noticia = new Noticias();
   }
   obtenerNoticias() {
    console.log(this.noticias);
    this.noticiasServices.getAllNoticias().then(respuesta => {
      this.noticias = respuesta;
    }).catch(error => {
      //this.toastr.error('Aun no hay noticias disponibles!', 'Oops algo ha salido mal!');
      alert('Error al obtener las noticias')
    });
  }
  ngOnInit() {
    this.obtenerNoticias();
  }

}
