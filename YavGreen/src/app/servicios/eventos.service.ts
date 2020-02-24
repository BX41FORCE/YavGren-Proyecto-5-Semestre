import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Evento } from './../models/eventos';

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

  postEvento(evento) {
    return this.http.post(this.url + '/post', evento).toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }
  putEvento(id, eventos: Evento) {
    return this.http.put(this.url + '/put/' + id + '/', eventos).toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }

  deleteEvento(id) {
    return this.http.delete(this.url + '/del/' + id).toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }


}

