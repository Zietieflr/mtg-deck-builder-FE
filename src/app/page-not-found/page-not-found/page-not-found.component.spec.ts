import { Spectator, createComponentFactory } from "@ngneat/spectator";
import { PageNotFoundComponent } from "deck-builder/page-not-found/page-not-found/page-not-found.component";

describe("PageNotFoundComponent", () => {
  let spectator: Spectator<PageNotFoundComponent>;

  const createComponent = createComponentFactory(PageNotFoundComponent);

  beforeEach(() => {
    spectator = createComponent();
  });

  it("should create", () => {
    expect(spectator.component).toBeInstanceOf(PageNotFoundComponent);
  });
});
