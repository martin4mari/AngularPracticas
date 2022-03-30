import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';

/*ME TIRA ERROR CUANDO COPIO DESDE LA GUIA */
@Component({
  templateUrl: 'cartDetail.component.html',
})
export class CartDetailComponent {
  constructor(public cart: Cart) {}
}
