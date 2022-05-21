import * as React from "react";
import styles from "./Loading.module.css";

export const Loading: React.FC = () => {
  return (
    <section>
      <div className={styles.loadingWrapper}>
        <div className={styles["animate-spin"]} />
      </div>
    </section>
  );
};
