import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Canjeo } from '../models/canjeo';

@Injectable({
  providedIn: 'root'
})
export class CanjeService {

  url = environment.url + 'news/';
  constructor(private http: HttpClient) { }

  getNoticasById(id) {
    return this.http.get(this.url + '/get/' + id).toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }

  getAllNoticias() {
    return this.http.get(this.url + 'get').toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }

  postNoticias(noticia: Canjeo) {
    return this.http.post(this.url + '/post', noticia).toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }
}
