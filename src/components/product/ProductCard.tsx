import * as React from "react";
import { FaStar } from "react-icons/fa";
import styles from "./ProductCard.module.css";
import { IProduct } from "hooks/useBusiness";

export const ProductCard: React.FC<{
  product: IProduct;
  onFav: (title: string) => void;
}> = ({ product, onFav }) => {
  return (
    <article className={styles.product}>
      <header className={styles["product-title"]}>{product.title}</header>
      <p>
        <strong>
          Rating: {product.rating ? `${product.rating.rate}/5` : ""}
        </strong>
      </p>
      <p>
        <b>Price: ${+product.price}</b>
      </p>
      <p className={styles.productBody}>
        <span>
          <b>Description:</b>
        </span>
        <br />
        {product.description}
      </p>
      <span className={styles["action_bar"]}>
        <span
          className={`${styles.actionBarItem} ${
            product.isFavorite ? "active" : ""
          }`}
          role="button"
          onClick={() => {
            onFav(product.title);
          }}
        >
          <FaStar />
          <span className={styles.actionBarItemLabel}>
            {product.isFavorite ? "Remove from favorites" : "Add to favorites"}
          </span>
        </span>
      </span>
    </article>
  );
};
