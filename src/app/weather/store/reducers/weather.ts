import { Action, createReducer, on, State } from "@ngrx/store";
import { Weather } from "src/app/model/weather";
import { addNewCity } from "../actions/weather";

const initialState: Weather[] = [];

const weatherReducer = createReducer(
  initialState,

  on(addNewCity, (state, weather) => {
    debugger;
    return [...state, weather.weather];
  })
);

export function reducer(state: Weather[], action: Action) {
  return weatherReducer(state, action);
}
