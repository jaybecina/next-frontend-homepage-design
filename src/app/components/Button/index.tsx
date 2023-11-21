import React from "react";
import styles from "../../../styles/home.module.css";

interface ButtonProps {
  children: string;
  href: string;
  customStyles?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href = "#",
  customStyles,
}) => {
  return (
    <button
      className={`${customStyles} ${styles.homeButton} rounded-3xl text-[16px] w-[200px] h-[60px]`}
    >
      {children}
    </button>
  );
};

export default Button;
