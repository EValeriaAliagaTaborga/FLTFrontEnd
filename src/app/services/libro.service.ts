import { Injectable } from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptions} from '@angular/http';
//import {HttpResponse} from "@angular/common/http";
//import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class LibroService {

  constructor(
    private http: Http) {}

   getLibros2(): Observable<HttpResponse<any>> {
      return this.http.get('http://localhost:8000/UPB/libros/get',
         {observe: 'response'});
    }

    getLibros(id): Observable<HttpResponse<any>> {
      let url = `http://localhost:8000/UPB/libros/getOne/${id}`;
      // let url = `http://localhost:8000/UPB/libros/get`;
      let data = url
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
  
      let requestOptions = new RequestOptions({
        method: RequestMethod.Get,
        url: url,
        headers: headers,
        body: data
      });
      return this.http.get(url,{observe: 'response'});
    }


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

  deleteLibros(id){
    let url = `http://localhost:8000/UPB/libros/erase/${id}`;
    let data = JSON.stringify(`http://localhost:8000/UPB/libros/getOne/${id}`);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let requestOptions = new RequestOptions({
      method: RequestMethod.Delete,
      url: url,
      headers: headers,
      body: data
    });
    return this.http.delete(url).forEach(res => res.json());
  }

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

