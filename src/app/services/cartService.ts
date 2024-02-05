import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import CartItem from "../interfaces/cartInterface";

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
    };

    deleteItemInCart(id: number): void {
        const prev = this.cartSubject.getValue();
        this.cartSubject.next(prev.filter((item) => item.id !== id));
    };

    modifyItemQuantity(id: number, quantity: number): void {
        const prevCart = this.cartSubject.getValue();
        const prevItem: CartItem | undefined = prevCart.find(item => item.id === id);

        if (prevItem) {
            const filteredCart = prevCart.filter((item) => item.id !== id);
            const newItem = { ...prevItem, quantity: quantity };
            this.cartSubject.next([...filteredCart, newItem]);
        } else {
            console.error("Cannot modify the quantity of an item not in cart!")
        }
    }
};