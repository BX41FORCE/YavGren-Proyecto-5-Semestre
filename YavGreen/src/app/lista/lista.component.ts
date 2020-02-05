import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  pro={
    numero:null,
    titulo:null,
    descripcion:null,
    img : null ,
  }
  
  producto = [{numero:'1',titulo:'Producto 1', descripcion:'Descripción del producto',img:'assets/img/producto1.jpg'},
  {numero:'2',titulo:'Producto 2', descripcion:'Descripción del producto', img:'assets/img/producto2.jpg'},
  {numero:'3',titulo:'Producto 3', descripcion:'Descripción del producto' ,img:'assets/img/producto3.jpg'},
  ];
  constructor() { }

  ngOnInit() {
  }

  

}
