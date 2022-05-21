import * as React from "react";
import logo from "assets/img/droppe-logo.png";
import styles from "./Navbar.module.css";
import classNames from "classnames";

export const Navbar: React.FC = () => {
  return (
    <section className={styles.header}>
      <figure className={classNames("container", styles["headerImageWrapper"])}>
        <img src={logo} className={styles.headerImage} alt="droppe-logo" />
      </figure>
    </section>
  );
};
