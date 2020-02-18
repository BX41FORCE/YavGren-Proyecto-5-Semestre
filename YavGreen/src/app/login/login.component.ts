import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { AuthenticationService } from '../servicios/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ParseSourceSpan } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  personas: Persona;
  persona1: Persona;
  personas1: any = [];

  constructor(private authenticationService: AuthenticationService, private toastr: ToastrService, private router: Router) {
    this.personas = new Persona();
    this.persona1 = new Persona();
  }

  ngOnInit() {
  }
  //redireccionamiento de pagina
  registro() {
    this.router.navigateByUrl('/registro');
  }
  //login y asignacion de token para el usuario q se loguee
  LoguearPersona() {
    this.verPersona(this.personas.correo_persona);
    this.authenticationService.loginPersona(this.personas).then(r => {
      this.authenticationService.setToken(r['token']);
      this.personas = r;
      this.router.navigateByUrl('/inicio');
      this.toastr.success('Ingresado con Exito!', 'Excelente');
    }).catch(e => {
      this.toastr.error('Ha ocurrido un error al Loguearse!', 'Usuario o Contraseña Incorrecto');
    });
  }

  verPersona(email) {
    this.authenticationService.getPersonaByEmail(email).then(respuesta => {
      this.authenticationService.setPersonaLS(respuesta[0].id_persona, respuesta[0].nombre_persona, respuesta[0].apellido_persona, respuesta[0].puntaje_persona);
    }).catch(error => {
      this.toastr.error('No se encontro a la persona');
    });
  }
}
