import { createAction, props } from "@ngrx/store";
import { Weather } from "src/app/model/weather";

export const addNewCity = createAction(
  "[Weather] Add weather Event",
  props<{ weather: Weather }>()
);
export const searchWeatherForCity = createAction(
  "[Weather] search for city Event",
  props<{ city: string }>()
);
