import { Component, OnInit } from '@angular/core';
import { NoticiasService } from './../servicio/noticias.service';
import { Noticias } from './../models/noticias';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticia-detalle',
  templateUrl: './noticia-detalle.page.html',
  styleUrls: ['./noticia-detalle.page.scss'],
})
export class NoticiaDetallePage implements OnInit {
  noticia: Noticias;
  noticias: any = [];
  id: any;

  constructor(private noticiasServices: NoticiasService, private _route: ActivatedRoute) {
    this.noticia = new Noticias();
   }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this.verNoticia(this.id);
  }
  verNoticia(id) {
    console.log(this.noticias);
    this.noticiasServices.getNoticasById(id).then(respuesta => {
      this.noticias = respuesta;
    }).catch(error => {
      alert('Aun no hay noticias disponibles!')
      //this.toastr.error('Aun no hay noticias disponibles!', 'Oops algo ha salido mal!');
    });
  }
}
