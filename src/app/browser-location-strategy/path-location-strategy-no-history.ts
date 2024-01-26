import { PathLocationStrategy } from "@angular/common";
import { Injectable } from "@angular/core";

@Injectable()
export class PathLocationStrategyWithoutState extends PathLocationStrategy {
   override pushState(state: any, title: string, url: string, queryParams: string): void {
   }
}