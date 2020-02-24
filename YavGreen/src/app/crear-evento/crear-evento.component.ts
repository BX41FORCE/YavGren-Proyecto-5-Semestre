import { Persona } from './../models/persona';
import { Component, OnInit } from "@angular/core";
import Swal from 'sweetalert2';
import { isFormattedError } from '@angular/compiler';
import { EventosService } from '../servicios/eventos.service';
import { AuthenticationService } from '../servicios/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Evento } from '../models/eventos';
import { Router } from '@angular/router';

@Component({
  selector: "app-crear-evento",
  templateUrl: "./crear-evento.component.html",
  styleUrls: ["./crear-evento.component.css"]
})
export class CrearEventoComponent implements OnInit {
  //variables Utilizadas
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
 
//constructor
  constructor(private eventosService: EventosService,private authenticationService: AuthenticationService,
     private toastr: ToastrService, private router:Router) {
    this.eventos = new Evento();
    this.personas = new Persona();
   }

   ngOnInit() {
    Swal.fire({
      position: 'top-end',
      icon: 'info',
      title: 'Recuerda Generar y Descargar el Código QR',
      showConfirmButton: false,
      timer: 1800
    })
   }
   //funcion para guardar eventos en la base
  guardarEvento(){
    this.eventos.puntaje_evento = this.qrcodename;
    this.eventos.codigo_evento = this.codigo;
    this.eventos.nombre_evento = this.titulo;
    this.eventos.id_persona_evento = 1 ;
    this.eventos.id_imagen_evento = 1 ;
   console.log(this.eventos);
    this.eventosService.postEvento(this.eventos).then(r => {
      this.eventos = r;
      this.toastr.success('Registrado con Exito!', 'Excelente');
      this.router.navigate(['/inicio'])
    }).catch(e => {
      this.toastr.error('Ha ocurrido un error!', 'Oops algo ha salido mal');
    });
  
  }
//funcion evaluar producto maximo 100 y minimo 50
  evaluar() {
    if (this.qrcodename <= 100 && this.qrcodename >= 50) {
    } else {
      alert("Solo puede ingresar un valor entre 50 y 100 puntos");
      this.qrcodename = null;
    }
  }
  //funcion para generar un codigo para  de diferentes caracteres para el codgo qr 
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
      if (this.titulo == null) {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Los campos deben estar llenos.'
        })
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
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Los campos deben estar llenos.'
        })
        this.display = false;
        return;
      }
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Solo puede ingresar un valor entre 50 y 100 puntos.'
      })
      this.display = false;
      this.qrcodename = null;
      this.codigo = null;
      return;
    }
  }
  //funcion para descargar el codigo qr
  downloadImage() {
    this.href = document.getElementsByTagName('img')[0].src;
  }
  //funcion salir
  salir(){
    this.eventos=null;
    this.eventos= new Evento;
  }

  
}
