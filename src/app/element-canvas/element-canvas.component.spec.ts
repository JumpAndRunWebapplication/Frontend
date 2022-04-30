import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementCanvasComponent } from './element-canvas.component';

describe('ElementCanvasComponent', () => {
  let component: ElementCanvasComponent;
  let fixture: ComponentFixture<ElementCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementCanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
