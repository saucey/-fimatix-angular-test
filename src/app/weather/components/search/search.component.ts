import { Component, EventEmitter, Output } from "@angular/core";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
})
export class SearchComponent {
  searchValue: string;
  @Output() search$ = new EventEmitter<string>();

  search() {
    this.search$.next(this.searchValue);
  }
}
