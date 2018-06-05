import { Component, OnInit } from '@angular/core';
import { UpdateService } from './update.service';

@Component({
  selector: 'libroform',
  template: `
    <div class="login">
      <h1><font color="black">Actualizar Libro</font></h1>
      Id<input type="text" [(ngModel)]="data_id" name="u" placeholder="id" required="required" />
      Name<input type="text" [(ngModel)]="data_name" name="u" placeholder="name" required="required" />
      Autor<input type="text" [(ngModel)]="data_autor" name="u" placeholder="autor" required="required" />
      <input type="button" value="actualizar" class="btn btn-primary btn-block" (click)="update($event, this.data_id)" />
    </div>`
})
export class UpdateComponent implements OnInit {
  //s
  data_name:any;
  data_id:any;
  data_autor:any;
  librosData:any=[];
  estado:any=[];
  dataTest:any=[];

  constructor(private serviciod : UpdateService) { }

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

  ngOnInit() {
  }

}
