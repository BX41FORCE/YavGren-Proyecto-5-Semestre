import { Evento } from './../models/eventos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  not={
    titulo:null,
    descripcion:null,
    
  }
  
  noticias = [{titulo:'Nueva forma de reciclaje inteligente 1', descripcion:'Existen nuevas formas de reciclar....'},
  {titulo:'Nueva forma de reciclaje inteligente 2', descripcion:'Existen nuevas formas de reciclar....'},
  {titulo:'Nueva forma de reciclaje inteligente 3', descripcion:'Existen nuevas formas de reciclar....'},
  {titulo:'Nueva forma de reciclaje inteligente 4', descripcion:'Existen nuevas formas de reciclar....'},
  
              
];
  
  tex={
    titulo:null,
    descripcion:null,
    descripcion2:null
  }

  texto =     [{titulo:'Evento en Favor del Reciclaje', descripcion:'Ven y participa del evento', descripcion2:'Te esperamos en el : YAVIRAC'},
  {titulo:'Evento en Favor del Reciclaje 1', descripcion:'Ven y participa del evento', descripcion2:'Te esperamos en el : YAVIRAC'},
  {titulo:'Evento en Favor del Reciclaje 2', descripcion:'Ven y participa del evento', descripcion2:'Te esperamos en el : YAVIRAC'},
  {titulo:'Evento en Favor del Reciclaje 3', descripcion:'Ven y participa del evento', descripcion2:'Te esperamos en el : YAVIRAC'},
              
];
pro={
  titulo:null,
  descripcion:null,
}

producto = [{titulo:'Producto 1', descripcion:'descripiòn del producto'},
{titulo:'Producto 2', descripcion:'descripiòn del producto'},
{titulo:'Producto 3', descripcion:'descripiòn del producto'},
{titulo:'Producto 4', descripcion:'descripiòn del producto'},
];
  
  constructor() { }

  ngOnInit() {
  }

}
