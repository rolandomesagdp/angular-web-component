import { Injectable } from '@angular/core';

@Injectable()
export class HelloWorldService {

   constructor() { }

   getHelloMessage(): string {
      return "Hello world";
   }
}
