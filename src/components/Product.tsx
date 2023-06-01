import Link from "next/link";
import ProductImage from "./ProductImage";

type Props = {
  product: Product;
};
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

function Product({ product }: Props) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="custom-link">
        <div className="custom-image-wrapper">
          <ProductImage product={product} />
        </div>
        <div className="custom-info">
          <p className="custom-title">{product.title}</p>
          <p className="custom-price">${product.price}</p>
        </div>
        <p className="custom-description">{product.description}</p>
      </div>
    </Link>
  );
}

export default Product;
