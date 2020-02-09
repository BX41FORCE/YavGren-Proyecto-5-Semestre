import { Component, OnInit } from '@angular/core';
import { ProductoService } from './../servicio/producto.service';
import { Producto } from './../models/producto';

@Component({
  selector: 'app-canjeo',
  templateUrl: './canjeo.page.html',
  styleUrls: ['./canjeo.page.scss'],
})
export class CanjeoPage implements OnInit {

  producto:Producto;
  productos: any = [];

  constructor(private productoServices:ProductoService) {
  }

  obtenerProductos() {
    console.log(this.productos);
    this.productoServices.getAllProductos().then(respuesta => {
      this.productos = respuesta;
     // this.toastr.success('Cargado con Exito!', 'Excelente');
    }).catch(error => {
      alert('Aun no hay productos disponibles!');
      //this.toastr.error('Aun no hay productos disponibles!', 'Oops algo ha salido mal!');
    });
  }

  ngOnInit() {
    this.obtenerProductos();
  }

}
