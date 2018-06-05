import { Component, OnInit } from '@angular/core';
import { GetService } from './get.service';
import { $ } from 'protractor';

@Component({
  selector: 'libroform',
  template: `
    <div class="login">
      <h1><font color="black">Obtener Libro</font></h1>
      name<input type="text" [(ngModel)]="data_id" name="u" placeholder="id" required="required" />
      <input type="button" value="obtener" class="btn btn-primary btn-block" (click)="get($event, this.data_id)" />
      <br>  Datos Libro  <br>
      <br>Libro Id : {{dataTest.id}}
      <br>Libro Name : {{dataTest.name}}
      <br>Libro Autor:  {{dataTest.autor}}
    </div>`
})
export class GetComponent implements OnInit {
  data_name:any;
  data_id:any;
  data_autor:any;
  librosData:any=[];
  estado:any=[];
  dataTest:any=[];

  constructor(private serviciod: GetService) { }

  get(event, id) {
    this.serviciod.getLibros(id).subscribe(
      res => {
        console.log(res);
        console.log('data response body'+res['_body']);
        this.dataTest = JSON.parse(res['_body']);
        console.log('body '+this.dataTest);
      }
    );
  }

  ngOnInit() {
  }

}
