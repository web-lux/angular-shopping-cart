import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/productService';
import Product from '../interfaces/productInterface';
import { FormsModule } from '@angular/forms';
import { CartService } from '../services/cartService';

@Component({
  selector: 'main[app-details]',
  standalone: true,
  templateUrl: "./details.component.html",
  styleUrl: "./details.component.scss",
  imports: [FormsModule]
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