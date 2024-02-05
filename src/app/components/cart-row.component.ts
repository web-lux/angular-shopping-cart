import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import CartItem from '../interfaces/cartInterface';
import { CartService } from '../services/cartService'; 

@Component({
  selector: '[app-cart-row]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-row.component.html',
  styleUrl: './cart-row.component.scss'
})
export class CartRowComponent {
  cartService: CartService = inject(CartService);
  @Input() cartItem!: CartItem;

  increaseQuantity() {
    this.cartService.modifyItemQuantity(this.cartItem.id, this.cartItem.quantity + 1)
  };

  decreaseQuantity() {
    if (this.cartItem.quantity === 1) {
      this.cartService.deleteItemInCart(this.cartItem.id);
      return
    }
    this.cartService.modifyItemQuantity(this.cartItem.id, this.cartItem.quantity - 1)
  };
};