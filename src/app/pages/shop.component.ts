import { Component } from '@angular/core';
import { placeholderProducts } from '../placeholderContent';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'main[app-shop]',
  standalone: true,
  templateUrl: "./shop.component.html",
  styleUrl: "./shop.component.scss",
  imports: [RouterLink]
})
export class ShopComponent {
  products = placeholderProducts;
}
