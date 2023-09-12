export interface ProductType {
  _id: string;
  name: string;
  image: string[];
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
}

export interface CartProduct {
  _id: string;
  name: string;
  image: string[];
  description: string;
  brand: string;
  countInStock: number;
  price: number;
  qty: number;
}

export interface CartState {
  cartItems: CartProduct[];
  shippingAddress: {
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  paymentMethod: string;
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
}
