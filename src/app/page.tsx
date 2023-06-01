"use client";
import Product from "@/components/Product";
import React, { useEffect } from "react";

interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: ProductType[] = await res.json();
  
  return (
    <main className="deals-section">
      <section>
        <h1 className="deals-title">DEALS OF THE DAY</h1>
        <div className="product-grid">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
