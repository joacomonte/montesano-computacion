"use client";
import Image from "next/image";
import styles from "./ProductCard.module.css";
import { RefObject, createRef } from "react";
import Link from "next/link";
import CustomDialog from "../CustomDialog/CustomDialog";

const dialogContent = (
  <>
    <h1>Proximamente</h1>
  </>
);

interface ProductProps {
  title?: string | null;
  img?: string | null;
  price?: string | null;
  oldPrice?: string | null;
  stock?: string | null;
}

const ProductCard: React.FC<ProductProps> = ({
  title,
  img,
  price,
  oldPrice,
  stock,
}) => {
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
      <div className={styles.imgContainer}>
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
        {title && <div className={styles.title}>{title}</div>}
        <button className={styles.infoButton} onClick={openDialog}>
          Mas info...
        </button>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.oldPriceContainer}>
          {oldPrice && <h5 className={styles.oldPrice}>{oldPrice}</h5>}
          {price && <data className={styles.price}>{price}</data>}
          {stock && <h6 className={styles.stock}>{stock}</h6>}
        </div>
        <Link
          className={styles.waContainer}
          href={`https://api.whatsapp.com/send?phone=5491160081811&text=${whatsAppMessage}`}
        >
          <Image
            src="/WA.svg"
            alt="Placeholder"
            sizes="15px"
            fill
            style={{
              objectFit: "contain",
            }}
          ></Image>
        </Link>
      </div>

      <CustomDialog
        onClose={closeDialog}
        content={dialogContent}
        dialogRef={dialogRef}
      />
    </div>
  );
};

export default ProductCard;
