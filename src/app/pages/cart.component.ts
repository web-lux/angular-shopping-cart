import { Component, inject } from '@angular/core';
import { BannerComponent } from '../components/banner.component';
import { CartService } from '../services/cartService';
import CartItem from '../interfaces/cartInterface';
import { CartRowComponent } from '../components/cart-row.component';

@Component({
  selector: 'main[app-cart]',
  standalone: true,
  templateUrl: "./cart.component.html",
  styleUrl: "./cart.component.scss",
  imports: [BannerComponent, CartRowComponent]
})
export class CartComponent {
  cartService: CartService = inject(CartService);
  cart: CartItem[] = [];

  constructor() {
    this.cartService.cart$.subscribe((value) => this.cart = value);
  };
};

