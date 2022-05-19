import * as React from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { Button } from "components/button";
import ProductList from "components/product/ProductList";
import { Form } from "components/form";

import styles from "App.module.css";
import { useDocumentTitle } from "hooks/useDocumentTitle";
import { useBusiness } from "hooks/useBusiness";
import { Navbar } from "components/navbar";
import { Header } from "components/header";
import classNames from "classnames";

const App: React.FC = () => {
  useDocumentTitle("Droppe refactor app");

  const {
    error,
    loading,
    prodCount,
    products,
    isShowingMessage,
    message,
    numFavorites,
    favClick,
    setIsOpen,
    isOpen,
    onSubmit,
  } = useBusiness("/products");

  // if (loading) return "Loading...";

  // if (error) return "Error...";

  return (
    <>
      <Navbar />
      <Header />

      <div className={classNames("container", styles["main"])}>
        <div className={styles.buttonWrapper}>
          <span role="button">
            <Button onClick={() => setIsOpen(true)}>
              Send product proposal
            </Button>
          </span>
          {isShowingMessage && (
            <div className={styles.messageContainer}>
              <i>{message}</i>
            </div>
          )}
        </div>

        <div className={styles.statsContainer}>
          <span>Total products: {prodCount}</span>
          {" - "}
          <span>Number of favorites: {numFavorites}</span>
        </div>

        {products && !!products.length ? (
          <ProductList products={products} onFav={favClick} />
        ) : (
          <div></div>
        )}
      </div>

      <>
        <Modal
          isOpen={isOpen}
          className={styles.reactModalContent}
          overlayClassName={styles.reactModalOverlay}
        >
          <div className={styles.modalContentHelper}>
            <div className={styles.modalClose} onClick={() => setIsOpen(false)}>
              <FaTimes />
            </div>

            <Form on-submit={onSubmit} />
          </div>
        </Modal>
      </>
    </>
  );
};

export default App;
