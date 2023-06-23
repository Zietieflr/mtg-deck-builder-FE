import { Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["../../node_modules/reset-css/reset.css", "./app.component.scss"],
  standalone: true,
  imports: [MatIconModule, MatTabsModule, MatToolbarModule, RouterOutlet],
})
export class AppComponent {
  public title = "deck-builder";
}
