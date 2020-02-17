import { ProductoService } from './../servicios/producto.service';
import { Producto } from './../models/producto';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  producto: Producto;
  productos: any = [];
  prod: Producto;
  prods: any = [];


  constructor(private productoServices: ProductoService, private toastr: ToastrService) {
    this.producto = new Producto;
  }

  ngOnInit() {
    this.obtenerProductos();

  }

  obtenerProductos() {
    this.productoServices.getAllProductos().then(respuesta => {
      this.productos = respuesta;
      this.toastr.success('Cargado con Exito!', 'Excelente');
    }).catch(error => {
      this.toastr.error('Aun no hay productos disponibles!', 'Oops algo ha salido mal!');
    });
  }

  eliminarProducto(id) {
    console.log(id)
    this.productoServices.deleteProducto(id).then(respuesta => {
      this.toastr.success('Eliminado con Exito!', 'Excelente');
      this.obtenerProductos();
    }).catch(error => {
      this.toastr.error('Aun no hay productos disponibles!', 'Oops algo ha salido mal!');
    });
  }

  verProducto(id) {
    console.log(this.prod);
    this.productoServices.getProductoById(id).then(respuesta => {
      this.prod = respuesta;
    }).catch(error => {
      this.toastr.error('Aun no hay noticias disponibles!', 'Oops algo ha salido mal!');
    });
  }

}





