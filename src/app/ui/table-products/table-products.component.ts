import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyProduct } from 'src/app/shared/product.model';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.css']
})
export class TableProductsComponent implements OnInit {

  @Input() products: MyProduct[] = [];
  @Input() title: string;

  @Output() deleteProduct = new EventEmitter<number>();
  @Output() minusProduct = new EventEmitter<MyProduct>();
  @Output() plusProduct = new EventEmitter<MyProduct>();
  @Output() changeProduct = new EventEmitter<MyProduct>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteProduct(id : number){
    this.deleteProduct.emit(id);
  }

  onChangeProduct(product: MyProduct){
    this.changeProduct.emit(product);
  }

  onMinusAmount(product: MyProduct){
    this.minusProduct.emit(product);
  }
  
  onPlusAmount(product: MyProduct){
    this.plusProduct.emit(product);
  }

}
