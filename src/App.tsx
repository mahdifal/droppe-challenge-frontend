import * as React from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { Button } from "components/button";
import ProductList from "components/product/ProductList";
import { Form } from "components/form";
import logo from "assets/img/droppe-logo.png";
import img1 from "assets/img/img1.png";
import img2 from "assets/img/img2.png";
import styles from "App.module.css";
import { useDocumentTitle } from "hooks/useDocumentTitle";
import { useBusiness } from "hooks/useBusiness";

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
      <div className={styles.header}>
        <div className={["container", styles.headerImageWrapper].join(" ")}>
          <img src={logo} className={styles.headerImage} />
        </div>
      </div>

      <>
        <span
          className={["container", styles.main].join(" ")}
          style={{
            margin: "50px inherit",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <img src={img1} style={{ maxHeight: "15em", display: "block" }} />
          <img src={img2} style={{ maxHeight: "15rem", display: "block" }} />
        </span>
      </>

      <div
        className={["container", styles.main].join(" ")}
        style={{ paddingTop: 0 }}
      >
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
