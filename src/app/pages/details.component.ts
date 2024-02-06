import { Component, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import Product from '../interfaces/productInterface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'main[app-details]',
  standalone: true,
  templateUrl: "./details.component.html",
  styleUrl: "./details.component.scss",
  imports: [FormsModule, CommonModule]
})
export class DetailsComponent implements OnDestroy {
  route: ActivatedRoute = inject(ActivatedRoute);
  productService: ProductService = inject(ProductService);
  cartService: CartService = inject(CartService);

  productID = Number(this.route.snapshot.params["id"]);
  product !: Product | null;
  sub !: Subscription;
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
    if (this.product) {

      if (this.cartService.checkIfItemAlreadyInCart(this.product.id)) {
        this.cartService.modifyItemQuantity(this.product.id, this.itemQuantity);
      } else {
        this.cartService.addToCart({ ...this.product, quantity: this.itemQuantity })
      }
    }
  }

  constructor() {
    this.sub = this.productService.getProductByID(this.productID).subscribe((value) => this.product = value);
    }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}