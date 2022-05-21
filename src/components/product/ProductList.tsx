import * as React from "react";
import lodash from "lodash";
import { ProductCard } from "./ProductCard";
import { IProduct } from "hooks/useBusiness";

interface IPostsProps {
  products: IProduct[];
  onFav: (title: string) => void;
}

const ProductList: React.FC<IPostsProps> = ({ products, onFav }) => {
  return (
    <>
      {lodash.reverse(
        products?.map(
          (product: IProduct, index: React.Key | null | undefined) => (
            <ProductCard key={index} product={product} onFav={onFav} />
          )
        )
      )}
    </>
  );
};

export default ProductList;
