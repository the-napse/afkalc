import React from "react";
import Item from "../../../ui/afk/Item";
import styles from "./TotalCost.module.css";

interface Props {
  isBest: boolean;
  children: number;
}

const TotalCost: React.FC<Props> = ({ isBest, children }) => (
  <div className={`${styles.TotalCost} ${isBest ? styles.Best : ""}`}>
    <Item name="diamond" size="small" />
    &nbsp;
    {children}
  </div>
);

export default TotalCost;
