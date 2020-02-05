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

  texto =     [{titulo:'Evento en Favor del Reciclaje 1', descripcion:'Ven y participa del evento', descripcion2:'Te esperamos en el : YAVIRAC'},
  {titulo:'Evento en Favor del Reciclaje 2', descripcion:'Ven y participa del evento', descripcion2:'Te esperamos en el : YAVIRAC'},
  {titulo:'Evento en Favor del Reciclaje 3', descripcion:'Ven y participa del evento', descripcion2:'Te esperamos en el : YAVIRAC'},
  {titulo:'Evento en Favor del Reciclaje 4', descripcion:'Ven y participa del evento', descripcion2:'Te esperamos en el : YAVIRAC'},
              
];

  
  constructor() { }

  ngOnInit() {
  }

}
