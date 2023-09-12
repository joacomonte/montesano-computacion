"use client";
import Image from "next/image";
import styles from "./ProductCard.module.css";
import { RefObject, createRef } from "react";

interface ProductProps {
  title?: string | null;
  img?: string | null;
  price?: string | null;
  stock?: string | null;
}

const ProductCard: React.FC<ProductProps> = ({ title, img, price, stock }) => {
  
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

      <dialog className={styles.dialog} ref={dialogRef}>
        <div className={styles.dialogContainer}>
          <button className={styles.closeDialogButton} onClick={closeDialog}>
            X
          </button>
          <div className={styles.dialogContent}>
            <h2>Descripci&oacute;n</h2>

            <ul>
              <li>
                La notebook Gateway Ultra Slim GWTC71427 es una soluci&oacute;n
                tanto para trabajar y estudiar como para entretenerte. Al ser
                port&aacute;til, el escritorio dejar&aacute; de ser tu
                &uacute;nico espacio de uso para abrirte las puertas a otros
                ambientes ya sea en tu casa o en la oficina.
              </li>
              <li>Pantalla con gran impacto visual</li>
              <li>
                Su pantalla LCD de 14.1&quot; y 1920x1080&nbsp;px de
                resoluci&oacute;n te brindar&aacute; colores m&aacute;s vivos y
                definidos. Tus pel&iacute;culas y series preferidas
                cobrar&aacute;n vida, ya que ganar&aacute;n calidad y
                definici&oacute;n en cada detalle.
              </li>
            </ul>

            <p>&nbsp;</p>
          </div>
        </div>
      </dialog>

      <div className={styles.centerContent}>
        <button className={styles.secondaryButton} onClick={openDialog}>
          Mas info
        </button>
        <button className={styles.primaryButton}>WhatsApp</button>
      </div>
    </div>
  );
};

export default ProductCard;
