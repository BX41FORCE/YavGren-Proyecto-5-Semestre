import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { AuthenticationService } from '../servicio/authentication.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  personas: Persona;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.personas = new Persona();
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
      //this.toastr.success('Ingresado con Exito!', 'Excelente');
      Swal.fire({
        timer: 1600,
        icon: 'success',
        title: 'Bienvenido'
      })
      this.router.navigateByUrl('/inicio');
    }).catch(e => {
      Swal.fire({
        timer: 1700,
        icon: 'error',
        title: 'Ha ocurrido un error al Loguearse!',
        text: 'Usuario o Contraseña Incorrecto',
      })
      //this.toastr.error('Ha ocurrido un error al Loguearse!', 'Usuario o Contraseña Incorrecto');
    });

  }
  verPersona(email) {
    this.authenticationService.getPersonaByEmail(email).then(respuesta => {
      this.authenticationService.setPersonaLS(respuesta[0].id_persona, respuesta[0].nombre_persona, respuesta[0].apellido_persona, respuesta[0].correo_persona, respuesta[0].puntaje_persona);
    }).catch(error => {
      alert('No se encontro a la persona');
      //this.toastr.error('No se encontro a la persona');
    });
  }
}
