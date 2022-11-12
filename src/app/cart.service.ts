import { Injectable } from '@angular/core';
import {Product} from './product'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  item:Product[]=[];

  constructor(private httpClient:HttpClient) { }

  getShippingPrices() {
    return this.httpClient.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  addToCart(product:Product){
    this.item.push(product)
  }
  getItems(){
    return this.item
  }
  clearCart(){
    this.item=[];
    return this.item;
  }
}
