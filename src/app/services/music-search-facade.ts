import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import {Observable} from "rxjs";
import { searchMusic } from "../store/actions";
import { BaseFacade } from "../store/facade";
import { getMusicItems } from "../store/reducers";




@Injectable({
    providedIn: 'root'
})
export class MusicSearchFacade extends BaseFacade {
    constructor(protected readonly state$: Store<any>) {
        super(state$);
    }
    
    readonly searchItems$: Observable<any> = this.takeAll(
        getMusicItems
    );
   
    readonly getSearchMusicItems = (searchKey: string) => {
        this.dispatch(searchMusic({searchKey}));
    }

}