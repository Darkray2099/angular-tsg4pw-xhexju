import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  constructor(private http: HttpClient) {}
  //Agrega productos al arreglo
  addToCart(product: Product) {
    this.items.push(product);
  }
  //Obtiene todos los productos
  getItems() {
    return this.items;
  }
  //Limpia el arreglo de productos
  clearCart() {
    this.items = [];
    return this.items;
  }
  //Obtiene los precios de entrega
  getShippingPrices() {
    //Hace una peticion a un recurso externo
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
