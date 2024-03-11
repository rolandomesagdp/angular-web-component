import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HelloWorldService } from './services/hello-world.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { environment } from 'src/environments/environment';
import { ASSETS_BASE_PATH } from './icon-token';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      BrowserAnimationsModule,
      MatButtonModule
   ],
   providers: [ 
      HelloWorldService,
      { provide: ASSETS_BASE_PATH, useValue: environment.basePath}
    ]
})
export class AppModule implements DoBootstrap {
   constructor(private injector: Injector) { }

   ngDoBootstrap(appRef: ApplicationRef): void {
      const webComponent = createCustomElement(AppComponent, {
         injector: this.injector
      });
      customElements.define('fluidra-counter', webComponent);
   }
}
