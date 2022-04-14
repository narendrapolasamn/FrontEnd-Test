import { Injectable } from "@angular/core";
import { MusicSearchAPIService } from "src/app/services";
import { act, Actions,createEffect,ofType} from '@ngrx/effects';
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import * as SearchActions from '../actions'
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class SearchEffects{

    constructor(private readonly musicSearchAPI:MusicSearchAPIService,
        private readonly actions$:Actions){

    }
    searchMusicItemEffect$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.searchMusic),
      mergeMap(action =>
        this.musicSearchAPI.getMusicSearch(action.searchKey).pipe(
          map((data: any) => {
            return SearchActions.searchMusicSuccess({ payload: data?.results });
          }),
          catchError((error) => {
            return of(error);
          })
        )
      )
    )
  );
}