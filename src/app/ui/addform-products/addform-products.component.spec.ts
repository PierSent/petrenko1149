import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddformProductsComponent } from './addform-products.component';

describe('AddformProductsComponent', () => {
  let component: AddformProductsComponent;
  let fixture: ComponentFixture<AddformProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddformProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddformProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
