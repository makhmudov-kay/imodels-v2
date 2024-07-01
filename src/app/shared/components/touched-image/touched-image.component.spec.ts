/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TouchedImageComponent } from './touched-image.component';

describe('TouchedImageComponent', () => {
  let component: TouchedImageComponent;
  let fixture: ComponentFixture<TouchedImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchedImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
