import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from "@ngrx/store";
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { searchReducer } from "./app.reducer";
import { AppState, SearchMusicState } from "./app.state";
import { IntialMusicItems } from "../../config";
import * as SearchMusicHelper from "../../helpers/search.utils";

let intialMusicItems: any = IntialMusicItems;
let searchItems: string[] = [];
let loaded: boolean = false;
export const destroyed$: Subject<any> = new Subject<any>();
export const reducers: ActionReducerMap<AppState> = {
  searchMusicSate: searchReducer,
};

export const getSearchMusicState =
  createFeatureSelector<SearchMusicState>("searchMusicSate");

export const getMusicItems = createSelector(
  getSearchMusicState,
  (state: SearchMusicState) => {
    if (state.musicItems) {
      let musicItems = state.musicItems.map((item: any) => item.collectionName);
      musicItems.sort((a: string, b: string) => (a < b ? -1 : 1));
      //get unique records
      musicItems = musicItems.filter(
        (value: any, index: any, self: any) => self.indexOf(value) === index
      );
      //take top 5 records
      searchItems = musicItems.slice(0, 5);
    }
    if (!loaded) {
      rotateItems();
      loaded = !loaded;
    }
    return intialMusicItems;
  }
);

export function rotateItems() {
  interval(1000)
    .pipe(takeUntil(destroyed$))
    .subscribe(() => {
      if (searchItems?.length) {
        intialMusicItems[0] = searchItems.shift();
      }
      SearchMusicHelper.rotateItems(intialMusicItems, 1);
    });
}
