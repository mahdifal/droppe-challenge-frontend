import * as React from "react";
import axios from "api/client";
import lodash from "lodash";

export type Response = {
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
};

export const useBusiness = (url: string): Response => {
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
      const response = await axios.get(url);
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

  const onSubmit = (payload: {
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
    setProducts(updated);
    setProdCount(lodash.size(products) + 1);

    setIsOpen(false);

    setIsShowingMessage(true);
    setMessage(`Adding Product`);

    // **this POST request doesn't actually post anything to any database**
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: payload.title,
        price: payload.price,
        description: payload.description,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        (function (t) {
          setTimeout(() => {
            setIsShowingMessage(false);
            setMessage("");
          }, 2000);
        })();
      });
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
