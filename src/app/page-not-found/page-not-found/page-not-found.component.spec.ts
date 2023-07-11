import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PageNotFoundContainerComponent } from "./page-not-found.component";

describe("PageNotFoundContainerComponent", () => {
  let component: PageNotFoundContainerComponent;
  let fixture: ComponentFixture<PageNotFoundContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PageNotFoundContainerComponent],
    });
    fixture = TestBed.createComponent(PageNotFoundContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
