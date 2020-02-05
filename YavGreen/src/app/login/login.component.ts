import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { AuthenticationService } from '../servicios/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  personas: Persona;

  constructor(private authenticationService: AuthenticationService, private toastr: ToastrService, private router: Router) {
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
    this.authenticationService.loginPersona(this.personas).then(r => {
      this.authenticationService.setToken(r['token']);
      this.personas = r;
      this.toastr.success('Ingresado con Exito!', 'Excelente');
      this.router.navigateByUrl('/inicio');
    }).catch(e => {
      this.toastr.error('Ha ocurrido un error al Loguearse!', 'Usuario o Contraseña Incorrecto');
    });

  }
}
