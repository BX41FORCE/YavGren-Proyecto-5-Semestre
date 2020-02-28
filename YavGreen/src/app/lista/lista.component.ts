import { Router, Route } from '@angular/router';
import { ProductoService } from './../servicios/producto.service';
import { AuthenticationService } from '../servicios/authentication.service';
import { Producto } from './../models/producto';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Persona } from '../models/persona';



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
  idUsuario: any;
  nombreUsuario: any;
  apellidoUsuario: any;
  puntajeUsuario: any;
  email: any;
  idCanjeo: any;
  cantidadCanjeo = 1;
  usuario: Persona;

  constructor(private authenticationService: AuthenticationService, private productoServices: ProductoService, private toastr: ToastrService, private router: Router) {
    this.producto = new Producto;
    this.prod = new Producto;
    this.usuario = new Persona();
  };

  ngOnInit() {
    this.obtenerProductos();

  };

  obtenerProductos() {
    this.productoServices.getAllProductos().then(respuesta => {
      this.productos = respuesta;
      this.toastr.success('Cargado con Exito!', 'Excelente');
    }).catch(error => {
      this.toastr.error('Aun no hay productos disponibles!', 'Oops algo ha salido mal!');
    });
  };

  eliminarProducto(id) {
    console.log(id)
    this.productoServices.deleteProducto(id).then(respuesta => {
      this.toastr.success('Eliminado con Exito!', 'Excelente');
      this.obtenerProductos();
    }).catch(error => {
      this.toastr.error('Aun no hay productos disponibles!', 'Oops algo ha salido mal!');
    });
  };

  //funcion para visualizar los productos
  verProducto(id) {
    this.productoServices.getProductoById(id).then(respuesta => {
      this.productos1 = respuesta;
      console.log(this.productos1);
    }).catch(error => {
      this.toastr.error('Aun no hay noticias disponibles!', 'Oops algo ha salido mal!');
    });
  };

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
  };
  verPersona() {
    this.authenticationService.getPersonaByEmail(this.email).then(respuesta => {
      //this.authenticationService.setPersonaLS(respuesta[0].id_persona, respuesta[0].nombre_persona, respuesta[0].apellido_persona, respuesta[0].correo_persona);
      this.idUsuario = respuesta[0].id_persona;
      this.nombreUsuario = respuesta[0].nombre_persona;
      this.apellidoUsuario = respuesta[0].apellido_persona;
      this.puntajeUsuario = respuesta[0].puntaje_persona;
      this.toastr.success('Persona Encontrada')
    }).catch(error => {
      this.toastr.error('No se encontro a la persona');
    });
  };
  canjear() {
    if (this.email != null && this.cantidadCanjeo < 6) {
      this.productoServices.getProductoById(this.idCanjeo).then(respuesta => {
        var conteo = this.cantidadCanjeo * parseInt(respuesta[0].costo_puntos_producto);
        if (conteo < this.puntajeUsuario) {
          var calculo = this.puntajeUsuario - conteo;
          this.usuario.puntaje_persona = calculo;
          this.authenticationService.putPersona(this.idUsuario, this.usuario).then(r => {
            this.toastr.success('', 'Canjeo Extitoso!')
            this.toastr.info('', 'Reinicie Sesión en el dispositivo!')
            setTimeout(function () { location.reload() }, 2000);
          }).catch(e => {
            this.toastr.error('','Error al Cajear');
          });
        } else {
          this.toastr.error('Usuario con: ' + this.puntajeUsuario + ' puntos', 'Puntaje insuficiente!');
        }
      }).catch(error => {
        this.toastr.error('No se Encontró el Producto!');
      });
    } else if (this.cantidadCanjeo > 5) {
      this.toastr.error('Se puede canjear un máximo de 5 productos');
    }
    else {
      this.toastr.error('Debe Buscar Un Usuario!');
    }
  };
};