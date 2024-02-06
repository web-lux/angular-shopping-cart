import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, of, tap } from 'rxjs';
import Product from '../interfaces/productInterface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http: HttpClient = inject(HttpClient);
  products: Product[] = [];

  getAllProducts() {
    if (this.products.length) {
      return of(this.products);
    }

    return this.http
      .get<Product[]>(`https://fakestoreapi.com/products?limit=5`)
      .pipe(
        tap((products: Product[]) => {
          this.products = products;
        })
      );
  }

  getProductByID(id: number) {
    return this.getAllProducts().pipe(
      map((products) => {
        const product = products.find((product: Product) => product.id === id);

        if (product) {
          return product;
        }

        return null;
      })
    );
  }
}
