/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApexProComponent } from './apex-pro.component';

describe('ApexProComponent', () => {
  let component: ApexProComponent;
  let fixture: ComponentFixture<ApexProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApexProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
