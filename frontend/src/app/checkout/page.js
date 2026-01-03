"use client";
import { useCart } from "../../context/CartContext";

export default function CheckoutPage() {
  const { cart } = useCart();

  const total = cart.reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {cart.map((item, i) => (
        <p key={i}>{item.name} - ₹{item.price}</p>
      ))}

      <h2 className="mt-6 text-xl font-bold">
        Total: ₹{total}
      </h2>

      <button className="mt-4 bg-orange-600 text-white px-6 py-2 rounded">
        Place Order
      </button>
    </div>
  );
}
