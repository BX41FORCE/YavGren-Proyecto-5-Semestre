import { Component, OnInit } from '@angular/core';
import { EventosService } from './../servicio/eventos.service';
import { Evento } from './../models/eventos';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

 evento:Evento;
 eventos: any = [];

  constructor(private eventosServices:EventosService) { }

  obtenerEventos() {
    console.log(this.eventos);
    this.eventosServices.getAllEventos().then(respuesta => {
      this.eventos = respuesta;
    }).catch(error => {
      alert('Aun no hay eventos disponibles!');
      //this.toastr.error('Aun no hay eventos disponibles!', 'Oops algo ha salido mal!');
    });
  }
  ngOnInit() {
    this.obtenerEventos();
  }

}
