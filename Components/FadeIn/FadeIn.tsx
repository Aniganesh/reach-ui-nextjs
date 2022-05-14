import clsx from "clsx";
import React, { FC } from "react";
import styles from "./FadeIn.module.css";

interface FadeInProps {
  visible: boolean;
  children: React.ReactNode[];
}

const FadeIn: FC<FadeInProps> = ({ visible, children }) => {
  return (
    <div className={`${styles.main} ${visible ? styles.in : styles.out}`}>
      {children}
    </div>
  );
};

export default FadeIn;
