import { Component } from '@angular/core';
import { LibroService } from './services/libro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Práctica navegación';
  data_name:any;
  data_id:any;
  data_autor:any;
  estados:any=[];

  constructor(private serviciod: LibroService)
  {
    //this.serviciod.getLibros();
  }
  ngOnInit(){
    //this.serviciod.getLibros();
    //this.serviciod.postLibros("")

  }
}
