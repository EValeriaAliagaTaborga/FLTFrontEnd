import { Component, OnInit } from '@angular/core';
import { AddService } from './add.service';
import { $ } from 'protractor';

@Component({
  selector: 'addform',
  template: `
    <div class="login">
      <h1><font color="black">
      Adicionar Libro
      </font></h1>
      Id<input type="text" [(ngModel)]="data_id" name="u" placeholder="id" required="required" />
      Name<input type="text" [(ngModel)]="data_name" name="u" placeholder="name" required="required" />
      Autor<input type="text" [(ngModel)]="data_autor" name="u" placeholder="autor" required="required" />
      <input type="button" value="añadir" class="btn btn-primary btn-block" (click)="save($event)" />
    </div>
    `
})
export class AddComponent implements OnInit {
    data_name:any;
    data_id:any;
    data_autor:any;
    librosData:any=[];
    estado:any=[];
    dataTest:any=[];
    constructor(private serviciod: AddService)
    {
    }
  
    save(event) {
      event.preventDefault();
      var newLibro={
        "name": this.data_name,
        "id": this.data_id,
        "autor":this.data_autor
      }
      this.serviciod.postLibros(newLibro);
      //this.cargar()
    }

    ngOnInit(){
      
    }
    cargar():void{
    }
  
  }

