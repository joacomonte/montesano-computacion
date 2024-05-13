"use client";
import Image from "next/image";
import styles from "./ProductCard.module.css";
import { RefObject, createRef } from "react";
import CustomDialog from "../CustomDialog/CustomDialog";
import Link from "next/link";

interface ProductProps {
  title?: string | null;
  img?: string | null;
  price?: string | null;
  oldPrice?: string | null;
  stock?: string | null;
  description?: string | null;
  cuotas?: string | null;
}

const ProductCard: React.FC<ProductProps> = ({ title, img, price, oldPrice, stock, description, cuotas }) => {

  const dialogContent = description ?? null;

  console.log(description);
  

  const lineJumper = (stock: string): string[] => {
    return stock.split("\\").map((item) => item.trim());
  };

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
      <div className="h-full">
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
              unoptimized
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

        {/* TITLE Y MAS INFO */}
        <div className="pl-2 pr-2 h-full">
          {title && <div className="mt-3 text-lg font-semibold">{title}</div>}

          {description && (
            <button className="mt-1 text-sm text-left text-gray-500 underline hover:text-green-900 hover:font-medium" onClick={openDialog}>
              Mas info
            </button>
          )}

          {/* BOTTOM PART */}
          <div className={styles.bottomContainer}>
            {oldPrice && <p className={styles.oldPrice}>{oldPrice}</p>}
            {price ? <p className={styles.price}>{price}</p> : <p className={styles.stock}>{stock}</p>}

            {cuotas && (
              <div className=" mt-1 border-2 p-2 border-gray-100 rounded-xl w-full ">
                <h4 className="text-sm font-medium text-gray-400">Lista de precios en cuotas</h4>
                {lineJumper(cuotas).map((item, index) => (
                  <p key={index} className="text-sm font-light text-green-700">
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* WHATSAPP  */}
          <Link className={styles.whatsappLink} href={`https://api.whatsapp.com/send?phone=5491130347718&text=${whatsAppMessage}`}>
            <p className=" text-[#439c4c]">Consultar</p>

            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-[20px] h-[20px]" viewBox="0 0 50 50">
              <path
                d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"
                fill="#57CA62"
              ></path>
            </svg>
          </Link>
        </div>

        {description && <CustomDialog onClose={closeDialog} content={dialogContent} dialogRef={dialogRef} />}
      </div>
    </div>
  );
};

export default ProductCard;
