import { Producto } from './../models/producto';
import { Component, OnInit,Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  public imagePath;
  imgURL: any;
  public message: string;
  valorProducto:number;

  productos:Producto;
  @Input() producto: any[];
  constructor(private productosService: ProductoService, private toastr: ToastrService) {
    this.productos= new Producto;
   }

  ngOnInit() {
    
  }


  evaluar() {
    console.log(this.valorProducto)
    if (this.valorProducto <= 100 && this.valorProducto >= 50) {
      alert("todo esta bien");
    } else {
      alert("Solo puede ingresar un valor entre 50 y 100 puntos.");
      this.valorProducto = null;
    }
  }

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
  guardarProducto(){
    this.productos.costo_puntos_producto=this.valorProducto;
    this.productos.id_imagen_producto = 1;
    this.evaluar();
    this.productosService.postProductos(this.productos).then(r => {
      this.productos = r;
      this.toastr.success(' Exito!', 'Excelente');
    }).catch(e => {
      this.toastr.error('Ha ocurrido un error!', 'Oops algo ha salido mal');
    });  
}
  
verProducto(id) {
  this.productosService.getProductoById(id).then(respuesta => {
    this.producto = respuesta;
    console.log(this.producto);
  }).catch(error => {
    this.toastr.error('Aun no hay noticias disponibles!', 'Oops algo ha salido mal!');
  });
}

}
