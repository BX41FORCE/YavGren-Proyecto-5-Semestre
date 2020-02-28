import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = 'http://192.168.1.9:3000/api';
  constructor(private http: HttpClient) { }

  getPerson() {
    return this.http.get(this.url + '/person/get').toPromise().then(response => {
      return response;
    }).catch(error => {
      return error.body;
    });
  }

  getPersonaByEmail(email) {
    return this.http.get(this.url + '/person/get/correo/' + email).toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }

  postPersona(persona) {
    return this.http.post(this.url + '/people/register', persona).toPromise().then(response => {
      return response;
    }).catch(error => {
      return error.body;
    });
  }

  putPersona(id, persona) {
    return this.http.put(this.url + '/person/put/' + id + "/", persona).toPromise().then(response => {
      return response;
    }).catch(error => {
      return error.body;
    });
  }

  loginPersona(persona) {
    return this.http.post(this.url + '/people/login', persona).toPromise().then(response => {
      return response;
    }).catch(error => {
      return error.body;
    });
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  setPersonaLS(id: any, nombre: any, apellido: any, puntaje: any) {
    localStorage.setItem('id', id);
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('apellido', apellido);
    localStorage.setItem('puntaje', puntaje);
  }

  getPersonaLS() {
    console.log(localStorage.getItem('id'));
    console.log(localStorage.getItem('nombre'));
    console.log(localStorage.getItem('apellido'));
    console.log(localStorage.getItem('puntaje'));
  }

  deletePersonaLS() {
    localStorage.removeItem('id');
    localStorage.removeItem('nombre');
    localStorage.removeItem('apellido');
    localStorage.removeItem('puntaje');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = localStorage.getItem('token');
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else {
      return null;
    }
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload) {
      return userPayload.exp > Date.now() / 1000;
    }
  }
}
