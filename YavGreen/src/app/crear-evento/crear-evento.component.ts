import { Persona } from './../models/persona';
import { Component, OnInit } from "@angular/core";
import { isFormattedError } from '@angular/compiler';
import { EventosService } from '../servicios/eventos.service';
import { AuthenticationService } from '../servicios/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Evento } from '../models/eventos';

@Component({
  selector: "app-crear-evento",
  templateUrl: "./crear-evento.component.html",
  styleUrls: ["./crear-evento.component.css"]
})
export class CrearEventoComponent implements OnInit {
  titulo: string;
  qrcodename: number;
  title = "generate-qrcode";
  elementType: "url" | "canvas" | "img" = "url";
  value: string;
  display = false;
  href: string;
  codigo: string;
  eventos:Evento;
  personas: Persona;

  constructor(private eventosService: EventosService,private authenticationService: AuthenticationService, private toastr: ToastrService) {
    this.eventos = new Evento();
    this.personas = new Persona();
   }

  ngOnInit() { }
  guardarEvento(){
    this.eventos.puntaje_evento = this.qrcodename;
    this.eventos.codigo_evento = this.codigo;
    this.eventos.nombre_evento = this.titulo;
    this.eventos.id_persona_evento = 1 ;
    
    
   
   console.log(this.personas);
    this.eventosService.postEvento(this.eventos).then(r => {
      this.eventos = r;
      this.toastr.success('Registrado con Exito!', 'Excelente');
    }).catch(e => {
      this.toastr.error('Ha ocurrido un error!', 'Oops algo ha salido mal');
    });
  
  }





  evaluar() {
    if (this.qrcodename <= 100 && this.qrcodename >= 50) {
    } else {
      alert("Solo puede ingresar un valor entre 50 y 100 puntos");
      this.qrcodename = null;
    }
  }
  generateQRCode() {
    if (this.qrcodename <= 100 && this.qrcodename >= 50) {
      var abecedario = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ];
      var str = "";
      for (var i = 1; i <= 5; i++) {
        str +=
          abecedario[Math.round(Math.random() * (25 - 0) + 0)] +
          Math.round(Math.random() * (3 - 1) + 1);
      }
      if (this.qrcodename == null || this.titulo == null) {
        alert("Los campos deben estar llenos");
        this.display = false;
        return;
      } else {
        this.codigo = str;
        this.value =
          this.titulo + "\n" + this.qrcodename.toString() + "\n" + str;
        this.display = true;
      }
    } else {
      if (this.qrcodename == null || this.titulo == null) {
        alert("Los campos deben estar llenos");
        this.display = false;
      }
      alert("Solo puede ingresar un valor entre 50 y 100 puntos");
      this.qrcodename = null;
    }
    // No borrar este código es para la lectura del QR en el Movil//
    /*
    var nombre = "";
    var puntaje = "";
    var codigo = "";
    var contador = 0;
    for (var i = 0; i < this.value.length; i++) {
      var caracter = this.value.charAt(i);
      if (caracter == '\n') {
        contador++
      }
      if (contador == 0 && caracter != '\n') {
        nombre += caracter;
      } else if (contador == 1 && caracter != '\n') {
        puntaje += caracter
      } else if (contador == 2 && caracter != '\n') {
        codigo += caracter
      }
    }
    alert(nombre);
    alert(puntaje);
    alert(codigo);*/
  }
  downloadImage() {
    this.href = document.getElementsByTagName('img')[0].src;
  }
  
 
}
