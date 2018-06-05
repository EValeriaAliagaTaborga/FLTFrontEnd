import { Injectable } from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptions} from '@angular/http';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class AddService {

  constructor(
    private http: Http) {}

  postLibros(newLibro) {
    let url = 'http://localhost:8000/UPB/libros/post';
    let data = JSON.stringify(newLibro);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let requestOptions = new RequestOptions({
      method: RequestMethod.Post,
      url: url,
      headers: headers,
      body: data
    });

   return this.http.post(url,data,requestOptions).forEach(res => res.json());
  }

}

