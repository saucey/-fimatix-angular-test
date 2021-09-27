import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Weather } from "src/app/model/weather";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
})
export class ResultsComponent {
  @Input() weatherLists$: Observable<Weather[]>;
  constructor() {}
}
