import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../models/eventos';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  url = environment.url + '/events';
  constructor(private http: HttpClient) { }

  getEventoById(id) {
    return this.http.get(this.url + '/get/' + id).toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }

  getAllEventos() {
    return this.http.get(this.url + '/get').toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }

  postEventos(evento) {
    return this.http.post(this.url + '/post', evento).toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }
  putEvento(evento:Evento){
    return this.http.put(this.url + '/:id/'  + evento.id_evento, evento).toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }

  deleteEvento(evento:Evento){
    return this.http.delete(this.url + '/:id/'  + evento.id_evento).toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }

  
}
