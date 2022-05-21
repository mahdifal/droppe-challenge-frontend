import * as React from "react";
import styles from "./Loading.module.css";

export const Loading: React.FC = () => {
  return (
    <div>
      <div className={styles.loadingWrapper}>
        <div className={styles["animate-spin"]} />
      </div>
    </div>
  );
};
