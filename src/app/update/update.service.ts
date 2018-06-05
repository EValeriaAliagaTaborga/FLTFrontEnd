import { Injectable } from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptions} from '@angular/http';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class UpdateService {

  constructor(
    private http: Http) {}
    
  updateLibros(id, Libro) {
    let url = `http://localhost:8000/UPB/libros/put/${id}`;
    let data = JSON.stringify(Libro);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let requestOptions = new RequestOptions({
      method: RequestMethod.Put,
      url: url,
      headers: headers,
      body: data
    });
    return this.http.put(url,data,requestOptions).forEach(res => res.json());
  }
}

