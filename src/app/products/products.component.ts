import { Component, OnInit } from '@angular/core';
import { MyProductType, MyProduct } from '../shared/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  myProductType = MyProductType;
  products: MyProduct[];
  changingProduct: MyProduct;
  showForm = false;

  constructor(private base: ProductService) { 
    this.getData();
  }

  ngOnInit(): void {
  }

  async onAddProduct(product: MyProduct){
    try {
      await this.base.addProduct(product);
    } catch (err) {
      console.error(err);
    } finally {
      this.getData();
    }
  }

  onChangeProduct(product) {
    this.changingProduct = product;
    this.showForm = true;
  }

  async onMinusProduct(product : MyProduct){
    try {
      if (product.amount > 1){
        product.amount--;
        await this.base.changeProduct(product);
        this.getData();
      }
      else{
        alert("Количество не должно быть меньше 0")
      }
    } catch (err) {
      console.error(err);
    } 
  }
  
  async onPlusProduct(product : MyProduct){
    try {
      if (product.amount < 100000){
        product.amount++;
        await this.base.changeProduct(product);
        this.getData();
      }
      else{
        alert("Количество не должно быть больше 100000 ")
      }
    } catch (err) {
      console.error(err);
    } 
  }

  async onEditProduct(product){
    try {
      this.showForm = false;
      await this.base.changeProduct(product);
      this.getData();
    } catch (err) {
      console.error(err);
    } 
  }

  async onDeleteById(id: number) {
    try {
      this.showForm = false;
      await this.base.deleteProduct(id);
      this.getData();
    } catch (err) {
      console.error(err);
    } 
  }
  
  getByType(type: number){
    return this.products.filter((product) => product.type === type);
  }

  async getData() {
    try {
      this.products = await this.base.getProducts();
    } catch (err) {
      console.error(err);
    }
  }

}
