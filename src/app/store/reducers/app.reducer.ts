import { Action, createReducer, on } from '@ngrx/store';
import * as SearchActions from '../actions/search.action';
import { SearchMusicState } from './app.state';

export const intialState: SearchMusicState = {
  musicItems: null
};
export const searchReducer = createReducer(
  intialState,
  on(SearchActions.searchMusicSuccess, (state, payload) => {
    return { ...state, musicItems: payload?.payload };
  }),

);

export function reducer(state: any, action: Action) {
  return searchReducer(state, action);
}