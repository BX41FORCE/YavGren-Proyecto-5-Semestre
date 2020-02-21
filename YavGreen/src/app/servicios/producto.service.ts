import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto';

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

  putProducto(id, producto) {
    return this.http.put(this.url + '/put/' + id + '/', producto).toPromise().then(response => {
      return response;
    }).catch(error => {
      return error.body;
    });
  }

  deleteProducto(id) {
    return this.http.delete(this.url + '/del/' + id).toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }
}
