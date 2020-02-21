import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = 'http://192.168.1.9:3000/api';
  constructor(private http: HttpClient) { }

  getPerson(){
    return this.http.get(this.url + '/person/get').toPromise().then(response => {
      return response;
    }).catch(error => {
      return error.body;
    }); 
  }

  postPersona(persona) {
    return this.http.post(this.url + '/people/register', persona).toPromise().then(response => {
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
