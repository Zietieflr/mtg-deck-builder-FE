import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["../../node_modules/reset-css/reset.css", "./app.component.scss"],
    standalone: true,
    imports: [RouterOutlet],
})
export class AppComponent {
  public title = "deck-builder";
}
