import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { CartRowComponent } from '../components/cart-row.component';
import { BannerComponent } from '../components/banner.component';
import CartItem from '../interfaces/cartInterface';

@Component({
  selector: 'main[app-cart]',
  standalone: true,
  templateUrl: "./cart.component.html",
  styleUrl: "./cart.component.scss",
  imports: [BannerComponent, CartRowComponent, CommonModule]
})
export class CartComponent {
  cartService: CartService = inject(CartService);
  cart: CartItem[] = [];

  constructor() {
    this.cartService.cart$.subscribe((value) => this.cart = value.sort());
  };
};

