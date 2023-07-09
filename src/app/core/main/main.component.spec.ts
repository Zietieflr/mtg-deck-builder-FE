import { MainComponent } from "deck-builder/core/main/main.component";
import { Spectator, createComponentFactory } from "@ngneat/spectator";

describe("MainComponent", () => {
  let spectator: Spectator<MainComponent>;

  const createComponent = createComponentFactory(MainComponent);

  beforeEach(() => {
    spectator = createComponent();
  });

  it("should create", () => {
    expect(spectator.component).toBeInstanceOf(MainComponent);
  });
});
