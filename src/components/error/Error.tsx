import * as React from "react";
import styles from "./Error.module.css";

type ErrorProps = {
  title: string;
};

export const Error: React.FC<ErrorProps> = ({ title }) => {
  return <div className={styles.alert}>{title}</div>;
};
