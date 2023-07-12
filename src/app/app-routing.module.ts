import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "deck-builder/core/main/main.component";
import { PageNotFoundComponent } from "deck-builder/page-not-found/page-not-found/page-not-found.component";
import { SearchContainerComponent } from "deck-builder/search-for-cards/search-container/search-container.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      { path: "search", component: SearchContainerComponent },
      { path: "", redirectTo: "/search", pathMatch: "full" },
    ],
  },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
