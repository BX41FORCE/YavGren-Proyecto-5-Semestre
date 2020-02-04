import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 url = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  postPersona(persona) {
    return this.http.post(this.url + '/people/register', persona).toPromise().then(response => {
      return response;
    }).catch(error => {
      return error.body;
    });
  }
  loginPersona(persona){
    return this.http.post(this.url + '/people/login', persona).toPromise().then(response => {
      return response;
    }).catch(error => {
      return error.body;
    });
  }
}
