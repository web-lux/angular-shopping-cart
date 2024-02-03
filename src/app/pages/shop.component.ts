import { Component, inject } from '@angular/core';
import { placeholderProducts } from '../placeholderContent';
import { RouterLink } from '@angular/router';
import { ProductService } from '../services/productService';

@Component({
  selector: 'main[app-shop]',
  standalone: true,
  templateUrl: "./shop.component.html",
  styleUrl: "./shop.component.scss",
  imports: [RouterLink]
})
export class ShopComponent {
  productService: ProductService = inject(ProductService);
  products = this.productService.getAllProducts();
}
