import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Weather } from "../model/weather";
import { searchWeatherForCity } from "./store/actions/weather";
import { weatherFeature } from "./store/selectors/weather";

@Component({
  selector: "app-weather",
  template: `
    <app-search (search$)="citySearch($event)"></app-search>
    <app-results [weatherLists$]="weathers"></app-results>
  `,
})
export class WeatherContainer {
  weathers: Observable<Weather[]> = this.store.select(weatherFeature);
  constructor(private store: Store) {}

  citySearch(city: string) {
    debugger;
    this.store.dispatch(searchWeatherForCity({ city }));
  }
}
