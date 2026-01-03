"use client";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, i) => (
          <div key={i} className="border p-4 mb-3">
            {item.name} — ₹{item.price}
          </div>
        ))
      )}
    </div>
  );
}
