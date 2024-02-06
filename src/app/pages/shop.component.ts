import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { BannerComponent } from '../components/banner.component';
import Product from '../interfaces/productInterface';

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

  products$ = this.productService.getAllProducts();

  addToCart(product: Product) {
    if (!this.cartService.checkIfItemAlreadyInCart(product.id)) {
      this.cartService.addToCart({ ...product, quantity: 1 });
    }
  };
}
