import { ProductoService } from './../servicios/producto.service';
import { Producto } from './../models/producto';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  producto:Producto;
  productos: any = [];


  constructor(private productoServices:ProductoService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.obtenerProductos();
  }
  obtenerProductos() {
    console.log(this.productos);
    this.productoServices.getAllProductos().then(respuesta => {
      this.productos = respuesta;
      this.toastr.success('Cargado con Exito!', 'Excelente');
    }).catch(error => {
      this.toastr.error('Aun no hay productos disponibles!', 'Oops algo ha salido mal!');
    });
  }
  
  

}
