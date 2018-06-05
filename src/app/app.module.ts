import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {BaseRequestOptions, HttpModule, RequestOptions, Headers} from '@angular/http';

import { AppComponent } from './app.component';
import { LibroService } from "./services/libro.service";
import { LibroComponent } from "./libro.component";
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { GetComponent } from './get/get.component';
import { AddService } from './add/add.service';
import { GetService } from './get/get.service';
import { DeleteService } from './delete/delete.service';
import { UpdateService } from './update/update.service';

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    AddComponent,
    DeleteComponent,
    UpdateComponent,
    GetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'add',
        component: AddComponent
      },
      {
        path: 'get',
        component: GetComponent
      },
      {
        path: 'update',
        component: UpdateComponent
      },
      {
        path: 'delete',
        component: DeleteComponent
      }
    ])
  ],
  providers: [LibroService, AddService, GetService, DeleteService, UpdateService],
  bootstrap: [AppComponent]
})
export class AppModule { }





