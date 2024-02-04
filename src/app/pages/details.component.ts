import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/productService';
import { CartService } from '../services/cartService';
import Product from '../interfaces/productInterface';

@Component({
  selector: 'main[app-details]',
  standalone: true,
  templateUrl: "./details.component.html",
  styleUrl: "./details.component.scss",
  imports: [FormsModule, CommonModule]
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productService: ProductService = inject(ProductService);
  cartService: CartService = inject(CartService);

  productID = Number(this.route.snapshot.params["id"]);
  product: Product | undefined;
  itemQuantity = 1;

  increaseQuantity() {
    this.itemQuantity++;
  }

  decreaseQuantity() {
    if (this.itemQuantity > 0) {
      this.itemQuantity--;
      }
  }

  addToCart() {
    if (this.cartService.checkIfItemAlreadyInCart(this.productID)) {
      alert("Item already in cart!")
    } else if (this.itemQuantity <= 0) {
      alert("Can't add item with a quantity inferior to 1") 
    } else if (this.product) {
      this.cartService.addToCart({ ...this.product, quantity: this.itemQuantity })
    }
  }

  constructor() {
    this.product = this.productService.getProductByID(this.productID);
  }
}