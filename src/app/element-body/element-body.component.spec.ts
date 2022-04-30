import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementBodyComponent } from './element-body.component';

describe('ElementBodyComponent', () => {
  let component: ElementBodyComponent;
  let fixture: ComponentFixture<ElementBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
