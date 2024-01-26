import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HelloWorldService } from './services/hello-world.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   @Input() wellcomeMessage: string = "";
   @Output() countChanged: EventEmitter<number> = new EventEmitter<number>();

   constructor(private router: Router, public helloWorldService: HelloWorldService) { }
   
   ngOnInit(): void {
      this.router.navigate(['']);
   }

   onClick(): void {
      this.router.navigate(['home']);
   }
}
