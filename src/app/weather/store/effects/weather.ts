import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, switchMap } from "rxjs/operators";
import { WeatherService } from "../../weather.service";
import { searchWeatherForCity, addNewCity } from "../actions/weather";

@Injectable()
export class WeatherEffectsService {
  fetchWeather$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(searchWeatherForCity),
      mergeMap((action) =>
        this.weatherService.searchWeatherForCity(action.city).pipe(
          map((weather) => {
            debugger;
            return addNewCity({ weather });
          })
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}
}
