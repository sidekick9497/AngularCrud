import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMediaComponent } from './input-media.component';

describe('InputMediaComponent', () => {
  let component: InputMediaComponent;
  let fixture: ComponentFixture<InputMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
