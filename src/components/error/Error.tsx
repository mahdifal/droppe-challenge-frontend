import * as React from "react";
import styles from "./Error.module.css";

type ErrorProps = {
  title: string;
};

export const Error: React.FC<ErrorProps> = ({ title }) => {
  return <section className={styles.alert}>{title}</section>;
};
