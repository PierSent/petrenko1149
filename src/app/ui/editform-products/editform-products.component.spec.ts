import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditformProductsComponent } from './editform-products.component';

describe('EditformProductsComponent', () => {
  let component: EditformProductsComponent;
  let fixture: ComponentFixture<EditformProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditformProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditformProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
