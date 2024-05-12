/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApexVrComponent } from './apex-vr.component';

describe('ApexVrComponent', () => {
  let component: ApexVrComponent;
  let fixture: ComponentFixture<ApexVrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApexVrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexVrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
