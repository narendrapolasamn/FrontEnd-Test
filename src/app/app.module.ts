import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicSearchItemComponent } from './components/music-search-item/music-search-item';
import { SearchEffects } from './store/effects/search.effects';
import { reducers } from './store/reducers';

@NgModule({
  declarations: [
    AppComponent,
    MusicSearchItemComponent
  ],
  exports:[MusicSearchItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([SearchEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
