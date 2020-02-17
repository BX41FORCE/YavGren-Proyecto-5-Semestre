import { Component, OnInit } from '@angular/core';
import { EventosService } from './../servicio/eventos.service';
import { Evento } from './../models/eventos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evento-detalle',
  templateUrl: './evento-detalle.page.html',
  styleUrls: ['./evento-detalle.page.scss'],
})
export class EventoDetallePage implements OnInit {
  evento: Evento;
  eventos: any = [];
  id: any;
  constructor(private eventosServices: EventosService, private _route: ActivatedRoute) {
    this.evento = new Evento();
  }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this.verEvento(this.id);
  }
  verEvento(id) {
    console.log(this.eventos);
    this.eventosServices.getEventoById(id).then(respuesta => {
      this.eventos = respuesta;
    }).catch(error => {
      alert('Aun no hay eventos disponibles!')
      //this.toastr.error('Aun no hay eventos disponibles!', 'Oops algo ha salido mal!');
    });
  }
}
