import { Router, Route } from '@angular/router';
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

  producto: Producto;
  productos: any = [];
  prod: Producto;
  productos1: any = [];
  nombreEdicion: any;

  constructor(private productoServices: ProductoService, private toastr: ToastrService, private router: Router) {
    this.producto = new Producto;
    this.prod = new Producto;
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

  //funcion para visualizar los productos
  verProducto(id) {
    this.productoServices.getProductoById(id).then(respuesta => {
      this.productos1 = respuesta;
      console.log(this.productos1);
    }).catch(error => {
      this.toastr.error('Aun no hay noticias disponibles!', 'Oops algo ha salido mal!');
    });
  }

  actualizarproducto(id, nombre, descripcion, puntaje) {
    console.log(id)
    this.prod.nombre_producto = nombre;
    this.prod.descripcion_producto = descripcion;
    this.prod.costo_puntos_producto = puntaje;
    this.productoServices.putProducto(id, this.prod).then(respuesta => {
      this.toastr.success('Actualizado con Exito!', 'Excelente');
      this.obtenerProductos();
    }).catch(error => {
      this.toastr.error('Error al Actualizar!', 'Oops algo ha salido mal!');
    });
  }
}





