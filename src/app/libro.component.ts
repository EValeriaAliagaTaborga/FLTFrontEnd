import { Component, OnInit } from '@angular/core';
import { LibroService } from './services/libro.service';
import { $ } from 'protractor';

@Component({
  selector: 'libroform',
  template: `
  <div class="login">
    <!--input type="button" value="volver" class="btn btn-primary btn-block" (click)="this.cargar()" /-->
    <br>  Datos Libro  <br>
    <br>Libro Id : {{dataTest.id}}
    <br>Libro Name : {{dataTest.name}}
    <br>Libro Autor:  {{dataTest.autor}}
  </div>`

})


//@Component(call(screen))
export class LibroComponent implements OnInit{
  data_name:any;
  data_id:any;
  data_autor:any;
  librosData:any=[];
  estado:any=[];
  dataTest:any=[];
  constructor(private serviciod: LibroService)
  {
  }

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

  delete(event, id) {
    event.preventDefault();
    this.serviciod.deleteLibros(id);
    //this.cargar()
  }

  update(event, id) {
    
    event.preventDefault();
    var newLibro={
      "name": this.data_name,
      "id": this.data_id,
      "autor":this.data_autor
    }
    this.serviciod.updateLibros(this.data_id, newLibro);
    //this.cargar()
  }

  ngOnInit(){
    screen = 0
    this.cargar();
  }
  cargar():void{
    //console.log('init ');
    /*
    this.serviciod.getLibros2().subscribe(
      res => {
        console.log(res);
        console.log('data response body'+res['_body']);
        this.dataTest = JSON.parse(res['_body']);
        console.log('body '+this.dataTest);
      }
    );
    */
    //console.log('final ');
  }

}

var screen