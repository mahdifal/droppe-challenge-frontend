import * as React from "react";
import classNames from "classnames";
import ProductList from "components/product/ProductList";
import styles from "App.module.css";
import { useDocumentTitle } from "hooks/useDocumentTitle";
import { IShop, useBusiness } from "hooks/useBusiness";
import { Navbar } from "components/navbar";
import { Header } from "components/header";
import AddProduct from "components/product/AddProduct";
import ProductsCount from "components/product/ProductsCount";
import { Error } from "components/error";
import { Loading } from "components/loading";

const App: React.FC<IShop> = () => {
  useDocumentTitle("Droppe refactor app");

  const {
    error,
    loading,
    products,
    isShowingMessage,
    message,
    prodCount,
    numFavorites,
    favClick,
    setIsOpen,
    isOpen,
    onSubmit,
  } = useBusiness();

  return (
    <main>
      <Navbar />
      <Header />
      <div className={classNames("container", styles["main"])}>
        <AddProduct
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          isShowingMessage={isShowingMessage}
          message={message}
          onSubmit={onSubmit}
        />
        <ProductsCount prodCount={prodCount} numFavorites={numFavorites} />
        {error && <Error title={error.message} />}
        {loading && <Loading />}
        {products && products.length ? (
          <ProductList products={products} onFav={favClick} />
        ) : (
          <div></div>
        )}
      </div>
    </main>
  );
};

export default App;
