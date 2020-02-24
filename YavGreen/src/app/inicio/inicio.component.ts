import { Noticias } from './../models/noticias';
import { EventosService } from './../servicios/eventos.service';
import { Evento } from './../models/eventos';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NoticiasService } from '../servicios/noticias.service';
import { AuthenticationService } from '../servicios/authentication.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  // variables utilizadas
  evento: Evento;
  eventos: any = [];
  evento1: Evento;
  eventos1: any = [];
  noticia: Noticias;
  noticias: any = [];
  noticia1: Noticias;
  noticias1: any = [];
  noticiaEdicion: Noticias;

  constructor(private authenticationService: AuthenticationService, private eventosServices: EventosService, private noticiasServices: NoticiasService,
    private toastr: ToastrService) {
    this.evento = new Evento();
    this.noticia = new Noticias();
    this.noticiaEdicion = new Noticias();
  }

  ngOnInit() {
    this.obtenerEventos();
    this.obtenerNoticias();
    this.authenticationService.getPersonaLS();
  }
  //funcion para obtener todos los eventos de la base
  obtenerEventos() {
    console.log(this.eventos);
    this.eventosServices.getAllEventos().then(respuesta => {
      this.eventos = respuesta;
    }).catch(error => {
      this.toastr.error('Aun no hay eventos disponibles!', 'Oops algo ha salido mal!');
    });
  }

  //funcion para obtener todos las noticias de la base
  obtenerNoticias() {
    console.log(this.noticias);
    this.noticiasServices.getAllNoticias().then(respuesta => {
      this.noticias = respuesta;
    }).catch(error => {
      this.toastr.error('Aun no hay noticias disponibles!', 'Oops algo ha salido mal!');
    });
  }

  //funcion para obtener una noticia de la base
  verNoticia(id) {
    console.log(this.noticias1);
    this.noticiasServices.getNoticasById(id).then(respuesta => {
      this.noticias1 = respuesta;
    }).catch(error => {
      this.toastr.error('Aun no hay noticias disponibles!', 'Oops algo ha salido mal!');
    });
  }

  //funcion para obtener una evento de la base
  verEvento(id) {
    console.log(this.eventos1);
    this.eventosServices.getEventoById(id).then(respuesta => {
      this.eventos1 = respuesta;
    }).catch(error => {
      this.toastr.error('Aun no hay eventos disponibles!', 'Oops algo ha salido mal!');
    });
  }


  actualizarNoticia(id, nombre, descripcion) {
    console.log(id)
    this.noticiaEdicion.nombre_noticia = nombre;
    this.noticiaEdicion.descripcion_noticia = descripcion;
    this.noticiasServices.putNoticias(id, this.noticiaEdicion).then(respuesta => {
      this.toastr.success('Actualización con Exito!', 'Excelente');
      this.obtenerNoticias();
    }).catch(error => {
      this.toastr.error('Error al Actualizar Noticia!', 'Oops algo ha salido mal!');
    });
  }
}
