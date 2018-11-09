import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OktoComponentsComponent } from './okto-components.component';

describe('OktoComponentsComponent', () => {
  let component: OktoComponentsComponent;
  let fixture: ComponentFixture<OktoComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OktoComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OktoComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
