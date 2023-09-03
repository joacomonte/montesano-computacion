"use client";
import Image from "next/image";
import styles from "./ProductCard.module.css";

interface ProductProps {
  title?: string;
  price?: string;
  stock?: string;
}

const ProductCard: React.FC<ProductProps> = ({ title, price, stock }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <Image src="/img.png" alt="Placeholder" width={200} height={200} />
      <p>{price}</p>
      <p>{stock}</p>
    </div>
  );
};

export default ProductCard;
