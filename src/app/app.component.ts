import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { MusicSearchFacade } from "./services";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  musicSearchText = "";
  musicSearchItems$: Observable<String[]> = this.musicSearchFacade.searchItems$;
  constructor(private musicSearchFacade: MusicSearchFacade) {}

  musicSearchChange() {
    if (this.musicSearchText.length > 3) {
      this.musicSearchFacade.getSearchMusicItems(this.musicSearchText);
    }
  }
}
