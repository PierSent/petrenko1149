import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyProductType, MyProduct } from 'src/app/shared/product.model';

@Component({
  selector: 'app-addform-products',
  templateUrl: './addform-products.component.html',
  styleUrls: ['./addform-products.component.css']
})
export class AddformProductsComponent implements OnInit {

  myProductType = MyProductType;
  type = 0;
  formProducts: FormGroup;

  checkNum = /^[+,0-9]+$/;

  @Output() addProduct = new EventEmitter<MyProduct>(); 
  
  constructor() { }

  ngOnInit(): void {
    this.formProducts = new FormGroup
    ({
      name: new FormControl('',[Validators.required,]),
      articul: new FormControl('',[Validators.required,]),
      manufacture: new FormControl(''),
      weight: new FormControl('',[Validators.pattern(this.checkNum), Validators.required,]),
      cost: new FormControl('',[Validators.pattern(this.checkNum), Validators.required,]),
      amount: new FormControl('',[Validators.pattern(this.checkNum), Validators.required,])
    });
  }

  onAddProduct(){
    this.addProduct.emit({
      name: this.formProducts.value.name,
      articul: this.formProducts.value.articul,
      manufacture: this.formProducts.value.manufacture,
      amount: this.formProducts.value.amount,
      weight: this.formProducts.value.weight,
      type: this.type,
      cost: this.formProducts.value.cost
    });
  }

}
