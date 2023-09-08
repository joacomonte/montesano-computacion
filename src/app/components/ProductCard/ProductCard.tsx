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
      <div className={styles.cardImg}>
        {img && img.trim() !== "" ? (
          <Image
            src={img}
            alt="Placeholder"
            sizes="500px"
            fill
            style={{
              objectFit: "contain",
            }}
          ></Image>
        ) : (
          <div className={styles.error}>Image not available</div>
        )}
      </div>
      <div>
        <h2>{title}</h2>
        <h4>{stock}</h4>
      </div>
      <div className={styles.priceAndButton}>
        <h3>{price}</h3>
        <button>WhatsApp</button>
      </div>
    </div>
  );
};

export default ProductCard;
