import { createAction, props } from '@ngrx/store';;


export const searchMusic = createAction(
  '[search music] search music action',
  props<{ searchKey: string }>()
);

export const searchMusicSuccess = createAction(
    '[search music] search music action success',
    props<{ payload: any }>()
  );