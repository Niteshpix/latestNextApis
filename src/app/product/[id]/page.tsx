"use client";
import { notFound } from "next/navigation";
import ProductImage from "../../../components/ProductImage";
import styles from "./productPage.module.css";

type Props = {
  params: {
    id: string;
  };
};
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string; 
}
async function ProductPage({ params: { id } }: Props) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product: Product = await res.json();

    return (
      <div className={styles["product-page-container"]}>
        <ProductImage product={product} />

        <div className={styles["product-details-container"]}>
          <div className={styles["details-section"]}>
            <h1 className={styles["product-title"]}>{product.title}</h1>
            <h2 className={styles["product-price"]}>{"$" + product.price}</h2>
          </div>

          <div className={styles["details-section"]}>
            <p className={styles["product-description"]}>
              {product.description}
            </p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}

export default ProductPage;
