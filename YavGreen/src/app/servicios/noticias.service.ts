import { Noticias } from './../models/noticias';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  url = environment.url + '/news';
  constructor(private http: HttpClient) { }

  getNoticasById(id) {
    return this.http.get(this.url + '/get/' + id).toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }

  getAllNoticias() {
    return this.http.get(this.url + '/get').toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }

  postNoticias(noticias) {
    return this.http.post(this.url + '/post', noticias).toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }

  putNoticias(noticias:Noticias){
    return this.http.put(this.url + '/:id/'  + noticias.id_noticias, noticias).toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }

  deleteEvento(noticias:Noticias){
    return this.http.delete(this.url + '/:id/'  + noticias.id_noticias).toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }

}
