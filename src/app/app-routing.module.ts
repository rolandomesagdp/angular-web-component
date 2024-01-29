import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { LocationStrategy } from '@angular/common';
import { PathLocationStrategyWithoutState } from './browser-location-strategy/path-location-strategy-no-history';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  imports: [
   RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      bindToComponentInputs: true
    })
  ],
  exports: [ RouterModule ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategyWithoutState }
  ]
})
export class AppRoutingModule {}
