import Product from "../interfaces/productInterface";

interface HasQuantity {
    quantity: number,
};

export default interface CartItem extends Product, HasQuantity {}

