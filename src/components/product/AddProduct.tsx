import * as React from "react";
import { Button } from "components/button";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { Form } from "components/form";
import styles from "./AddProduct.module.css";

type AddProductProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  isShowingMessage: boolean;
  message: string;
  onSubmit: (payload: {
    title: string;
    description: string;
    price: string;
  }) => void;
};

const AddProduct: React.FC<AddProductProps> = ({
  setIsOpen,
  isOpen,
  isShowingMessage,
  message,
  onSubmit,
}) => {
  return (
    <>
      <section className={styles.buttonWrapper}>
        <span role="button">
          <Button onClick={() => setIsOpen(true)}>Send product proposal</Button>
        </span>
        {isShowingMessage && (
          <header className={styles.messageContainer}>
            <i>{message}</i>
          </header>
        )}
      </section>
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
  );
};

export default AddProduct;
