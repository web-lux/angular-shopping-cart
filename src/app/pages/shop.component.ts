import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../services/productService';
import CartItem from '../interfaces/cartInterface';
import Product from '../interfaces/productInterface';
import { CartService } from '../services/cartService';
import { BannerComponent } from '../components/banner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'main[app-shop]',
  standalone: true,
  templateUrl: "./shop.component.html",
  styleUrl: "./shop.component.scss",
  imports: [RouterLink, BannerComponent, CommonModule]
})
export class ShopComponent {
  productService: ProductService = inject(ProductService);
  cartService: CartService = inject(CartService);
  products = this.productService.getAllProducts();

  addToCart(product: Product) {
    // add item in cart only if it isn't there already
    if (!this.cartService.checkIfItemAlreadyInCart(product.id)) {
      this.cartService.addToCart({ ...product, quantity: 1 });
    }
  }
}
