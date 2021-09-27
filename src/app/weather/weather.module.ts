import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WeatherContainer } from "./weather.container";
import { WeatherService } from "./weather.service";
import { SearchComponent } from "./components/search/search.component";
import { ResultsComponent } from "./components/results/results.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../../environments/environment";
import { StoreRouterConnectingModule } from "@ngrx/router-store";

import { StoreModule } from "@ngrx/store";
import { reducer } from "./store/reducers/weather";
import { WeatherEffectsService } from "./store/effects/weather";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature("weather", reducer),
    EffectsModule.forFeature([WeatherEffectsService]),
  ],
  declarations: [SearchComponent, ResultsComponent, WeatherContainer],
  providers: [WeatherService],
})
export class WeatherModule {}
