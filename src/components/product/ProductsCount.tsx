import * as React from "react";
import styles from "./ProductsCount.module.css";

type ProductsCountProps = {
  prodCount: number;
  numFavorites: number;
};

const ProductsCount: React.FC<ProductsCountProps> = ({
  prodCount,
  numFavorites,
}) => {
  return (
    <section className={styles.statsContainer}>
      <span>Total products: {prodCount}</span>
      {" - "}
      <span>Number of favorites: {numFavorites}</span>
    </section>
  );
};

export default ProductsCount;
