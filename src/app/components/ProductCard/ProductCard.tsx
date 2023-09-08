"use client";
import Image from "next/image";
import styles from "./ProductCard.module.css";

interface ProductProps {
  title?: string;
  img: string;
  price?: string;
  stock?: string;
}

const ProductCard: React.FC<ProductProps> = ({ title, img, price, stock }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <div className={styles.cardImg}>
      {img && img.trim() !== "" ? (
        <Image src={img} alt="Placeholder" fill sizes="300px"></Image>
        ) : (
          <div className={styles.error}>Image not available</div>
        )}
      </div>
      <p>{price}</p>
      <p>{stock}</p>
    </div>
  );
};

export default ProductCard;
