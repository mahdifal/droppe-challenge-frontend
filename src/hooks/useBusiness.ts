import * as React from "react";
import axios from "api/client";
import lodash from "lodash";

export interface IProduct {
  length: IProduct;
  product: {
    title: string;
    description: string;
    price: number;
    isFavorite: boolean;
    rating: { rate: number; count: number };
  }[];
}

export interface IShop {
  products: any[];
  prodCount: number;
  loading: boolean;
  error: any;
  isShowingMessage: boolean;
  message: string;
  numFavorites: number;
  favClick: (title: string) => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: (payload: {
    title: string;
    description: string;
    price: string;
  }) => void;
}

export const useBusiness = (): IShop => {
  const [products, setProducts] = React.useState<any[]>([]);
  const [prodCount, setProdCount] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<any>(null);
  const [isShowingMessage, setIsShowingMessage] =
    React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>("");
  const [numFavorites, setNumFavorites] = React.useState<number>(0);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/products");
      setProducts(response.data);
      setProdCount(response.data.length);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

  const favClick = (title: string) => {
    const prods = products;
    const idx = lodash.findIndex(prods, { title });
    let currentFavs = numFavorites;
    let totalFavs: any;

    if (prods[idx].isFavorite) {
      prods[idx].isFavorite = false;
      totalFavs = --currentFavs;
    } else {
      totalFavs = ++currentFavs;
      prods[idx].isFavorite = true;
    }
    setProducts(prods);
    setNumFavorites(totalFavs);
  };

  const onSubmit = async (payload: {
    title: string;
    description: string;
    price: string;
  }) => {
    const updated = lodash.clone(products);
    updated.push({
      title: payload.title,
      description: payload.description,
      price: payload.price,
    });

    try {
      const response = await axios.post("/products", payload);
      if (response.status === 200) {
        setProducts(updated);
        setProdCount(lodash.size(products) + 1);
        setMessage(`Adding Product`);
        setIsShowingMessage(true);
        setIsOpen(false);
      }
    } catch (error) {
      setError(error);
    }

    setTimeout(() => {
      setIsShowingMessage(false);
      setMessage("");
    }, 2000);
  };

  return {
    products,
    prodCount,
    loading,
    error,
    isShowingMessage,
    message,
    numFavorites,
    favClick,
    setIsOpen,
    isOpen,
    onSubmit,
  };
};
