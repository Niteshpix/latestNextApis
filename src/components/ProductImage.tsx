"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  product: Product;
  fill?: boolean;
};
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

function ProductImage({ product, fill }: Props) {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {fill ? (
        <Image
          src={product.image}
          alt={product.title}
          fill
          className={`custom-fill-image-class`}
          onLoadingComplete={() => setLoading(false)}
        />
      ) : (
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={1000}
          className={`custom-fixed-image-class`}
          onLoadingComplete={() => setLoading(false)}
        />
      )}
    </>
  );
}

export default ProductImage;
