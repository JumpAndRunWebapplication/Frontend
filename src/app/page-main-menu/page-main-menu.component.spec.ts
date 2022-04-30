import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMainMenuComponent } from './page-main-menu.component';

describe('PageMainMenuComponent', () => {
  let component: PageMainMenuComponent;
  let fixture: ComponentFixture<PageMainMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMainMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
