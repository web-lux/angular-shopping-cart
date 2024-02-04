import { Injectable } from "@angular/core";
import CartItem from "../interfaces/cartInterface";
import { BehaviorSubject, tap } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class CartService {
    private cartSubject = new BehaviorSubject<CartItem[]>([]);
    cart$ = this.cartSubject.asObservable();

    checkIfItemAlreadyInCart(id: number): boolean {
        return this.cartSubject.getValue().some(item => item.id === id);
    };

    addToCart(cartItem :CartItem):void {
        this.cartSubject.next([...this.cartSubject.getValue(), cartItem]);
;    };
};