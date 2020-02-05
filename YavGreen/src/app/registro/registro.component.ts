import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Persona } from '../models/persona';
import { AuthenticationService } from '../servicios/authentication.service';
import { Router } from '@angular/router';
import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  personas: Persona;
  person: any [];

  constructor(private authenticationService: AuthenticationService, private toastr: ToastrService, private router: Router) {
    this.personas = new Persona();
  }

  ngOnInit() {
  }
  login() {
    this.router.navigateByUrl('/login');
  }
  guardarPersona() {
    this.personas.id_rol_persona = 2;
    this.personas.puntaje_persona = 0;
    this.authenticationService.getPerson().then(result => {
      this.person = result;
    }).catch(err=>{
      console.log(err);
    })
    if (this.personas.nombre_persona && this.personas.apellido_persona && this.personas.correo_persona && this.personas.password_persona) {
      this.authenticationService.postPersona(this.personas).then(r => {
        this.authenticationService.setToken(r['token']);
        this.personas = r;
        this.toastr.success('Registrado con Exito!', 'Excelente');
        this.router.navigateByUrl('/inicio');
      }).catch(e => {
        this.toastr.error('Ops!', 'Ha ocurrido un error al Registarse!');
      });
    }
    else {
      this.toastr.error('Ingrese todos los campos', 'Ha ocurrido un error al Registarse!');
    }
  }
}
