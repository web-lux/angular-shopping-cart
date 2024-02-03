import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/productService';
import Product from '../interfaces/productInterface';

@Component({
  selector: 'main[app-details]',
  standalone: true,
  templateUrl: "./details.component.html",
  styleUrl: "./details.component.scss",
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productService: ProductService = inject(ProductService);
  productID = Number(this.route.snapshot.params["id"]);
  product: Product | undefined;

  constructor() {
    this.product = this.productService.getProductByID(this.productID);
  }
}