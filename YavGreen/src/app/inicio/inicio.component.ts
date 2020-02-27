import { Noticias } from './../models/noticias';
import { EventosService } from './../servicios/eventos.service';
import { Evento } from './../models/eventos';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NoticiasService } from '../servicios/noticias.service';
import { AuthenticationService } from '../servicios/authentication.service';
import Swal from 'sweetalert2';

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
  eventoEdicion: Evento;
  //Variables para la edición con QR
  title = "generate-qrcode";
  elementType: "url" | "canvas" | "img" = "url";
  value: string;
  display = false;
  href: string;

  constructor(private authenticationService: AuthenticationService, private eventosServices: EventosService, private noticiasServices: NoticiasService,
    private toastr: ToastrService) {
    this.evento = new Evento();
    this.noticia = new Noticias();
    this.noticiaEdicion = new Noticias();
    this.eventoEdicion = new Evento();
  }

  ngOnInit() {
    this.obtenerEventos();
    this.obtenerNoticias();
    this.authenticationService.getPersonaLS();
  }

  verFotoEvento() {
    var imagen = Math.floor(Math.random() * (10 - 1)) + 1;
    return imagen;
  }
  verFotoNoticia() {
    var imagen = Math.floor(Math.random() * (10 - 1)) + 1;
    this.fotoNoticia = '../../assets/img/inicio' + imagen + '.jpg'
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

  eliminarNoticia(id) {
    console.log(id)
    this.noticiasServices.deleteNoticias(id).then(respuesta => {
      this.toastr.success('Eliminado con Exito!', 'Excelente');
      this.obtenerNoticias();
    }).catch(error => {
      this.toastr.error('Aun no hay productos disponibles!', 'Oops algo ha salido mal!');
    });
  }

  generateQRCode(titulo: string, qrcodename: number, codigo: string) {
    if (qrcodename <= 100 && qrcodename >= 50) {
      if (titulo == null) {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Los campos deben estar llenos.'
        })
        this.display = false;
        return;
      } else {
        this.value =
          titulo + "\n" + qrcodename.toString() + "\n" + codigo;
        this.display = true;
      }
    } else {
      if (qrcodename == null || titulo == null) {
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
      return;
    }
  }
  downloadImage() {
    this.href = document.getElementsByTagName('img')[0].src;
  }

  actualizarEvento(id, nombre, fecha: Date, lugar, objetivo, puntaje) {
    console.log(id)
    this.eventoEdicion.nombre_evento = nombre;
    this.eventoEdicion.fecha_evento = fecha;
    this.eventoEdicion.lugar_evento = lugar;
    this.eventoEdicion.objetivo_evento = objetivo;
    this.eventoEdicion.puntaje_evento = puntaje;
    this.eventosServices.putEvento(id, this.eventoEdicion).then(respuesta => {
      this.toastr.success('Actualización con Exito!', 'Excelente');
      this.obtenerEventos();
    }).catch(error => {
      this.toastr.error('Error al Actualizar Evento!', 'Oops algo ha salido mal!');
    });
  }

  eliminarEvento(id) {
    console.log(id)
    this.eventosServices.deleteEvento(id).then(respuesta => {
      this.toastr.success('Eliminado con Exito!', 'Excelente');
      this.obtenerEventos();
    }).catch(error => {
      this.toastr.error('Aun no hay productos disponibles!', 'Oops algo ha salido mal!');
    });
  }

}
