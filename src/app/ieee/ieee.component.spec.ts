import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IeeeComponent } from './ieee.component';

describe('IeeeComponent', () => {
  let component: IeeeComponent;
  let fixture: ComponentFixture<IeeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IeeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IeeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
