import React, { useState, useEffect, useMemo } from "react";
import Header from "./Header";
import useFetchProducts from "../utils/useFetchProducts";
import { useCart } from "../utils/useCart";
import { CartProvider } from "../utils/CartContext";

export const Product = () => {
  const [selectedRating, setSelectedRating] = useState("4.0");

  const { addToCart, cartItems } = useCart(); // ✅ read state

  const { prodList, loading } = useFetchProducts();

  useEffect(() => {
    console.log("🛒 Cart Context Updated:", cartItems);
  }, [cartItems]);

  const ratings = useMemo(() => {
    if (!prodList?.products) return [];
    return [...new Set(prodList.products.map(p => Math.floor(p.rating)))]
      .sort((a, b) => b - a);
  }, [prodList]);

  const filteredProducts = useMemo(() => {
    if (!selectedRating) return prodList?.products || [];
    return prodList?.products?.filter(
      (p) => Math.floor(p.rating) >= selectedRating
    );
  }, [prodList, selectedRating]);

  if (loading) return <div>loading.......</div>;

  return (
  
       <div>
      <Header />
      <span>Cart {cartItems?.length || ""}</span>

      <select
        value={selectedRating}
        onChange={(e) => setSelectedRating(Number(e.target.value))}
      >
        <option value="">Select Rating</option>
        {ratings.map((rating) => (
          <option key={rating} value={rating}>
            {rating} & above
          </option>
        ))}
      </select>

      <div className="main">
        {filteredProducts?.map((prod) => (
          <div key={prod.id} className="bg-orange-400 m-3 p-4 rounded-xl items-center justify-center">
            <img  className="w-[300px] bg-amber-200 rounded-3xl" src={prod.images?.[0]} alt={prod.title} />

            <button
             className="mx-auto bg-green-500 px-4 py-2 rounded-xl"
              onClick={() => addToCart(prod)}
            >
              Add+
            </button>
          </div>
        ))}
      </div>
    </div>
 
   
  );
};
