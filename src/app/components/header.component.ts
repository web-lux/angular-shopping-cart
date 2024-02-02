import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: "header[app-header]",
  standalone: true,
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
  imports: [RouterLink],
})
export class HeaderComponent {
  cartQuantity = 0;
}