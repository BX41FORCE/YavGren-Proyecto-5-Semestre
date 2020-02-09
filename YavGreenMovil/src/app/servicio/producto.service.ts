import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = environment.url + '/products';
  constructor(private http: HttpClient) { }

  getProductoById(id) {
    return this.http.get(this.url + '/get/' + id).toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }

  getAllProductos() {
    return this.http.get(this.url + '/get').toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }

  postProductos(producto: Producto) {
    return this.http.post(this.url + '/post', producto).toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }

  putProducto(producto:Producto){
    return this.http.put(this.url + '/:id/'  + producto.id_producto, producto).toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }

  deleteProducto(producto:Producto){
    return this.http.delete(this.url + '/:id/'  + producto.id_producto).toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }
}
