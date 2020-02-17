import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { AuthenticationService } from '../servicio/authentication.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  personas: Persona;
  person: any [];

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.personas = new Persona();
   }

  ngOnInit() {
  }
  guardarPersona() {
    this.personas.id_rol_persona = 1;
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
        Swal.fire({
          timer: 1600,
          icon: 'success',
          title: 'Registrado'
        })
        //this.toastr.success('Registrado con Exito!', 'Excelente');
        this.router.navigateByUrl('/inicio');
      }).catch(e => {
        Swal.fire({
          timer: 1700,
          icon: 'error',
          title: 'Ha ocurrido un error al Registrarse!',
        })
        //this.toastr.error('Ops!', 'Ha ocurrido un error al Registarse!');
      });
    }
    else {
      Swal.fire({
        timer: 1700,
        icon: 'error',
        title: 'Todos los campos deben estar llenos!',
      })
      //this.toastr.error('Ingrese todos los campos', 'Ha ocurrido un error al Registarse!');
    }
  }
}
