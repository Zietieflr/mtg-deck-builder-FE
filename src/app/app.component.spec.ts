import { AppComponent } from "deck-builder/app.component";
import { Spectator, createComponentFactory } from "@ngneat/spectator";

describe("AppComponent", () => {
  let spectator: Spectator<AppComponent>;

  const createComponent = createComponentFactory(AppComponent);

  beforeEach(() => (spectator = createComponent()));

  it("should create the app", () => {
    expect(spectator.component).toBeInstanceOf(AppComponent);
  });
});
