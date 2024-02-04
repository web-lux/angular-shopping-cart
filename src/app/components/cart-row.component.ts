import { Component, Input } from '@angular/core';
import CartItem from '../interfaces/cartInterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: '[app-cart-row]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-row.component.html',
  styleUrl: './cart-row.component.scss'
})
export class CartRowComponent {
  @Input() cartItem!: CartItem;
}