import { ActivatedRoute } from "@angular/router";
import { Spectator, createComponentFactory } from "@ngneat/spectator";
import { MainComponent } from "deck-builder/core/main/main.component";

describe("MainComponent", () => {
  let spectator: Spectator<MainComponent>;

  const createComponent = createComponentFactory({
    component: MainComponent,
    mocks: [ActivatedRoute],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it("should create", () => {
    expect(spectator.component).toBeInstanceOf(MainComponent);
  });
});
