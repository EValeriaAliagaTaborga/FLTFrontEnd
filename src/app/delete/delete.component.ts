import { Component, OnInit } from '@angular/core';
import { DeleteService } from './delete.service';
import { $ } from 'protractor';

@Component({
  selector: 'libroform',
  template: `
    <div class="login">
      <h1><font color="black">Borrar Libro</font></h1>
      Id<input type="text" [(ngModel)]="data_id" name="u" placeholder="id" required="required" />
      <input type="button" value="borrar" class="btn btn-primary btn-block" (click)="delete($event, this.data_id)" />
    </div>`
})
export class DeleteComponent implements OnInit {

  constructor(private serviciod: DeleteService) { }

  delete(event, id) {
    event.preventDefault();
    this.serviciod.deleteLibros(id);
    //this.cargar()
  }

  ngOnInit() {
  }


}
