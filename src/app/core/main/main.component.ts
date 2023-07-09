import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-main",
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTabsModule, MatToolbarModule],
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent {}
