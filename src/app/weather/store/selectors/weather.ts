import { createSelector } from "@ngrx/store";
import { Weather } from "../../../model/weather";

export const weatherFeature = (state: { weather: Weather[] }) => state.weather;

export const getWeatherWithDates = (allowDatesTime: Date[]) =>
  createSelector(weatherFeature, (state) => {
    return state.map((w: Weather) => ({
      ...w,
      list: w.list?.filter((l) => allowDatesTime.includes(new Date(l.dt))),
    }));
  });
