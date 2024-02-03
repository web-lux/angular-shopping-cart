import { Injectable } from "@angular/core";
import CartItem from "../interfaces/cartInterface";

@Injectable({
    providedIn: 'root',
})
export class CartService {
    public Cart: CartItem[] = [];

    checkIfItemAlreadyInCart(id: number):boolean {
        return this.Cart.some(item => item.id === id)
    };

    addToCart(cartItem :CartItem):void {
        this.Cart.push(cartItem);
    };
};