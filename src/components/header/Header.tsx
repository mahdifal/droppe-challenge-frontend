import * as React from "react";
import img1 from "assets/img/img1.png";
import img2 from "assets/img/img2.png";
import styles from "./Header.module.css";
import classNames from "classnames";

export const Header: React.FC = () => {
  return (
    <>
      <figure className={classNames("container", styles["main"])}>
        <img src={img1} className={styles.headerImg} alt="shop header" />
        <img src={img2} className={styles.headerImg} alt="shop header" />
      </figure>
    </>
  );
};
