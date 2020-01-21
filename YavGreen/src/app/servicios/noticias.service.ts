import { Noticias } from './../models/noticias';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  url = environment.url + 'noticias/';
  constructor(private http: HttpClient) { }

  getNoticasById(id) {
    return this.http.get(this.url + 'obtenerNoticias/' + id).toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }

  getAllNoticias() {
    return this.http.get(this.url + 'obtenerNoticias').toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }

  postNoticias(noticia: Noticias) {
    return this.http.post(this.url + 'guardarNoticias', noticia).toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }
}
