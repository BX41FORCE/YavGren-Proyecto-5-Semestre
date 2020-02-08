import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  url = environment.url + '/picture';
  constructor(private http: HttpClient) { }

  getImagesById(id) {
    return this.http.get(this.url + '/get/' + id).toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }

  getAllImages() {
    return this.http.get(this.url + '/get').toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }

  postImages(images) {
    return this.http.post(this.url + '/post', images).toPromise().then(r => {
      return r;
    }).catch(e => {
      return e.body;
    });
  }
}