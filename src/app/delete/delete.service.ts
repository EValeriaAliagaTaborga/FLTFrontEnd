import { Injectable } from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptions} from '@angular/http';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class DeleteService {

  constructor(
    private http: Http) {}

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
}

