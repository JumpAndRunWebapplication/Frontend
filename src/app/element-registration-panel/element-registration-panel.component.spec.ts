import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementRegistrationPanelComponent } from './element-registration-panel.component';

describe('ElementRegistrationPanelComponent', () => {
  let component: ElementRegistrationPanelComponent;
  let fixture: ComponentFixture<ElementRegistrationPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementRegistrationPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementRegistrationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
