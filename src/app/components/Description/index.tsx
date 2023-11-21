import React from "react";
import styles from "../../../styles/home.module.css";

interface DescriptionProps {
  desc: string;
}

const Description: React.FC<DescriptionProps> = ({ desc }) => {
  return (
    <>
      <p className={`${styles.homeDesc} text-white text-[22px] leading-[34px]`}>
        {desc}
      </p>
    </>
  );
};
export default Description;
