import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyProductType, MyProduct } from 'src/app/shared/product.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editform-products',
  templateUrl: './editform-products.component.html',
  styleUrls: ['./editform-products.component.css']
})
export class EditformProductsComponent implements OnInit {

  @Input() changingProduct: MyProduct;

  myProductType = MyProductType;
  formChange: FormGroup;
  type: MyProductType;

  @Output() editProduct = new EventEmitter<MyProduct>(); 
  @Output() deleteProduct = new EventEmitter<number>(); 

  checkNum = /^[+,0-9]+$/;

  constructor() { }

  ngOnInit(): void {
    this.formChange = new FormGroup
    ({
      name: new FormControl(this.changingProduct.name, [Validators.required,]),
      type: new FormControl(this.changingProduct.type),
      articul: new FormControl(this.changingProduct.articul, [Validators.required,]),
      manufacture: new FormControl(this.changingProduct.manufacture),
      weight: new FormControl(this.changingProduct.weight, [Validators.pattern(this.checkNum), Validators.required,]),
      cost: new FormControl(this.changingProduct.cost, [Validators.pattern(this.checkNum), Validators.required,]),
      amount: new FormControl(this.changingProduct.amount, [Validators.pattern(this.checkNum), Validators.required,])
    });
    document.getElementsByTagName("dialog")[0].showModal();
  }

  onDeleteProduct(){
    this.deleteProduct.emit(this.changingProduct.id);
  }

  onEditProduct() {
    this.changingProduct.name = (<HTMLInputElement>document.getElementById("InputName")).value;
    this.changingProduct.articul = (<HTMLInputElement>document.getElementById("InputArticul")).value;
    this.changingProduct.manufacture = (<HTMLInputElement>document.getElementById("InputManufacture")).value;
    this.changingProduct.type = parseInt((<HTMLInputElement>document.getElementById("SelectType")).value);
    this.changingProduct.weight = parseInt((<HTMLInputElement>document.getElementById("InputWeight")).value);
    this.changingProduct.amount = parseInt((<HTMLInputElement>document.getElementById("InputAmount")).value);
    this.changingProduct.cost = parseInt((<HTMLInputElement>document.getElementById("InputCost")).value);
    this.editProduct.emit(this.changingProduct);
  }

}
