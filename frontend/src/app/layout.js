import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";

export const metadata = {
  title: "SriMandir Shop",
  description: "Authentic Puja Samagri & Spiritual Products Online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#140810] text-white">
        <CartProvider>
          {/* NAVBAR */}
          <Navbar />

          {/* PAGE CONTENT */}
          <main className="min-h-screen">
            {children}
          </main>

          {/* FOOTER */}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
