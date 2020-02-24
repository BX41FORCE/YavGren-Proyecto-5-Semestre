import { Producto } from './../models/producto';
import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from '../servicios/producto.service';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  //variables utilizadas 
  public imagePath;
  imgURL: any;
  public message: string;
  valorProducto: number;
  productos: Producto;
  producto: any[];
  edit: boolean = false;

  //constructo
  constructor(private productosService: ProductoService, private toastr: ToastrService, private router: Router
    , private activeRoute: ActivatedRoute) {
    this.productos = new Producto;
  }

  //funciones al comenzar
  ngOnInit() {
  }

  //funcion evaluar producto maximo 100 y minimo 50
  evaluar() {
    console.log(this.valorProducto)
    if (this.valorProducto <= 100 && this.valorProducto >= 50) {
     // alert("todo esta bien");
    } else {
      //alert("Solo puede ingresar un valor entre 50 y 100 puntos.");
      this.valorProducto = null;
    }
  }

  //funcion para cargar  imagenes
  preview(files) {
    if (files.length === 0) return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      alert("Solo debe subir archivos de imagen");
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      this.imgURL = reader.result;
    };
  }

  //funcion para guarda producto a la base 
  guardarProducto() {
    this.productos.costo_puntos_producto = this.valorProducto;
    this.productos.id_imagen_producto = 1;
    this.evaluar();
    this.productosService.postProductos(this.productos).then(r => {
      this.productos = r;
      this.toastr.success(' Exito!', 'Excelente');
      this.router.navigate(['/lista'])
    }).catch(e => {
      this.toastr.error('Ha ocurrido un error!', 'Oops algo ha salido mal');
    });
  }
}
