import { Spectator, createComponentFactory } from "@ngneat/spectator";
import { SearchContainerComponent } from "deck-builder/search-for-cards/search-container/search-container.component";

describe("SearchContainerComponent", () => {
  let spectator: Spectator<SearchContainerComponent>;

  const createComponent = createComponentFactory(SearchContainerComponent);

  beforeEach(() => {
    spectator = createComponent();
  });

  it("should create", () => {
    expect(spectator.component).toBeInstanceOf(SearchContainerComponent);
  });
});
