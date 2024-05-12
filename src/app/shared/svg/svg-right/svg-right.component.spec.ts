/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SvgRightComponent } from './svg-right.component';

describe('SvgRightComponent', () => {
  let component: SvgRightComponent;
  let fixture: ComponentFixture<SvgRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
