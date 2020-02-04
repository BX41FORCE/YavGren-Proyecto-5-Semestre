import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Persona } from '../models/persona';
import { AuthenticationService } from '../servicios/authentication.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  personas: Persona;

  constructor(private authenticationService: AuthenticationService, private toastr: ToastrService) {
    this.personas = new Persona();
  }

  ngOnInit() {
  }
  guardarPersona() {
    this.personas.id_rol_persona = 2;
    this.personas.puntaje_persona = 0;
    this.authenticationService.postPersona(this.personas).then(r => {
      this.personas = r;
      this.toastr.success('Registrado con Exito!', 'Excelente');
    }).catch(e => {
      this.toastr.error('Ha ocurrido un error al Registarse!', 'Oops algo ha salido mal');
    });
  }
}
