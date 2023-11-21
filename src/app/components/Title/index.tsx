import React from "react";
import styles from "../../../styles/home.module.css";

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <>
      <h2
        className={`mt-[30px] w-[995px] leading-[84px] text-[68px] font-bold text-white mb-4 ${styles.homeTitle}`}
      >
        {title}
      </h2>
    </>
  );
};

export default Title;
