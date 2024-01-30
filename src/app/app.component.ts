import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelloWorldService } from './services/hello-world.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private error700: string = "#991617";
  @Input() primaryColor: string = "#2290a9";
  private currentColor: string = this.primaryColor;

  constructor(private router: Router, public helloWorldService: HelloWorldService) { }

  ngOnInit(): void {
    this.currentColor = this.primaryColor;
    this.updateGlobalPrimaryColorVariable();
    this.router.navigate(['']);
  }

  onClick(): void {
    this.router.navigate(['home']);
  }

  changePrimaryColor(): void {
    this.toggleCurrentPrimaryColor();
    this.updateGlobalPrimaryColorVariable();
  }

  private toggleCurrentPrimaryColor(): void {
    if (this.currentColor === this.primaryColor) {
      this.currentColor = this.error700;
    }
    else this.currentColor = this.primaryColor;
  }

  private updateGlobalPrimaryColorVariable(): void {
    document.documentElement.style.setProperty('--primary-700', this.currentColor);
  }
}
