import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Evento } from './../models/eventos';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  url = environment.url + 'eventos/';
  constructor(private http: HttpClient) { }

  getEventoById(id) {
    return this.http.get(this.url + 'obtenerEvento/' + id).toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }

  getAllEventos() {
    return this.http.get(this.url + 'obtenerEvento').toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }

  postEvento(evento: Evento) {
    return this.http.post(this.url + 'guardarEvento', evento).toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }
}

