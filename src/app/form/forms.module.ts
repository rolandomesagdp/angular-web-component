import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './form.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
   declarations: [
      FormComponent
   ],
   imports: [
      BrowserModule,
      MatButtonModule
   ],
   providers: [],
   exports: [ FormComponent ]
})
export class FormsModule { }
