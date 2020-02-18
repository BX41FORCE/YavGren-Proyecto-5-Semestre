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
  evento: Evento;
  eventos: any = [];
  evento1: Evento;
  eventos1: any = [];
  noticia: Noticias;
  noticias: any = [];
  noticia1: Noticias;
  noticias1: any = [];

  constructor(private authenticationService: AuthenticationService, private eventosServices: EventosService, private noticiasServices: NoticiasService,
    private toastr: ToastrService) {
    this.evento = new Evento();
    this.noticia = new Noticias();
  }

  ngOnInit() {
    this.obtenerEventos();
    this.obtenerNoticias();
    this.authenticationService.getPersonaLS();
  }

  obtenerEventos() {
    console.log(this.eventos);
    this.eventosServices.getAllEventos().then(respuesta => {
      this.eventos = respuesta;
    }).catch(error => {
      this.toastr.error('Aun no hay eventos disponibles!', 'Oops algo ha salido mal!');
    });
  }
  obtenerNoticias() {
    console.log(this.noticias);
    this.noticiasServices.getAllNoticias().then(respuesta => {
      this.noticias = respuesta;
    }).catch(error => {
      this.toastr.error('Aun no hay noticias disponibles!', 'Oops algo ha salido mal!');
    });
  }
  verNoticia(id) {
    console.log(this.noticias1);
    this.noticiasServices.getNoticasById(id).then(respuesta => {
      this.noticias1 = respuesta;
    }).catch(error => {
      this.toastr.error('Aun no hay noticias disponibles!', 'Oops algo ha salido mal!');
    });
  }
  verEvento(id) {
    console.log(this.eventos1);
    this.eventosServices.getEventoById(id).then(respuesta => {
      this.eventos1 = respuesta;
    }).catch(error => {
      this.toastr.error('Aun no hay eventos disponibles!', 'Oops algo ha salido mal!');
    });
  }
}
