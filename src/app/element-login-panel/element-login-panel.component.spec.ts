import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementLoginPanelComponent } from './element-login-panel.component';

describe('ElementLoginPanelComponent', () => {
  let component: ElementLoginPanelComponent;
  let fixture: ComponentFixture<ElementLoginPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementLoginPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementLoginPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
