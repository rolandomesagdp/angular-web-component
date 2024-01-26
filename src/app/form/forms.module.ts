import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './form.component';

@NgModule({
   declarations: [
      FormComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   exports: [ FormComponent ]
})
export class FormsModule { }
