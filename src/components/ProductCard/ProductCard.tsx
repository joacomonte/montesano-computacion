"use client";
import Image from "next/image";
import styles from "./ProductCard.module.css";
import { RefObject, createRef } from "react";
import Link from "next/link";
import CustomDialog from "../CustomDialog/CustomDialog";

const dialogContent = (
  <>
    <h1>Titulo</h1>
    <h3>Subtitulo</h3>
    <p>Descripcion larga y aburrida</p>
    <br />
    <p>Mas descripcion larga y aburrida</p>
    <br />
  </>
);

interface ProductProps {
  title?: string | null;
  img?: string | null;
  price?: string | null;
  stock?: string | null;
}

const ProductCard: React.FC<ProductProps> = ({ title, img, price, stock }) => {
  const whatsAppMessage = encodeURIComponent(`Estoy interesado en ${title}`);

  const dialogRef: RefObject<HTMLDialogElement> = createRef();

  function openDialog() {
    document.body.style.overflow = "";
    dialogRef.current?.showModal?.();
  }

  function closeDialog() {
    document.body.style.overflow = "";
    dialogRef?.current?.close();
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        {img ? (
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
          <Image
            src={"/img.png"}
            alt="Placeholder"
            sizes="500px"
            fill
            style={{
              objectFit: "contain",
            }}
          ></Image>
        )}
      </div>
      <div>
        {title && <h2>{title}</h2>}
        {stock && <h4 className={styles.stock}>{stock}</h4>}
      </div>
      <div className={styles.priceContainer}>
        <div className={styles.oldPriceContainer}>
          <h4 className={styles.oldPrice}>$400</h4>
          {price && <h3>{price}</h3>}
        </div>
      </div>

      <CustomDialog
        onClose={closeDialog}
        content={dialogContent}
        dialogRef={dialogRef}
      />

      <div className={styles.centerContent}>
        <button className={styles.secondaryButton} onClick={openDialog}>
          Mas info
        </button>
        <Link
          href={`https://api.whatsapp.com/send?phone=5491160081811&text=${whatsAppMessage}`}
        >
          <button className={styles.primaryButton}>WhatsApp</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
