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
    costo:null,
  }
  
  producto = [{numero:'1',titulo:'Producto 1', descripcion:'Descripiòn del producto',img:'assets/img/producto1.jpg', costo:100 },
  {numero:'2',titulo:'Producto 2', descripcion:'Descripiòn del producto', img:'assets/img/producto2.jpg' ,costo:100},
  {numero:'3',titulo:'Producto 3', descripcion:'Descripiòn del producto' ,img:'assets/img/producto3.jpg',costo:100 },
  ];
  constructor() { }

  ngOnInit() {
  }

  

}
