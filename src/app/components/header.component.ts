import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';
import CartItem from '../interfaces/cartInterface';

@Component({
  selector: "header[app-header]",
  standalone: true,
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
  imports: [RouterLink],
})
export class HeaderComponent {
  cartService: CartService = inject(CartService);
  cart!: CartItem[];

  constructor() {
    this.cartService.cart$.subscribe((value) => this.cart = value);
  }
}