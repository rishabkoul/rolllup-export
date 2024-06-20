import React from "react";
import myImage from "../../assets/fundLogo.png";
import styles from "./MfReport.scss";

const MfReport = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Hello from MF Report</h1>
    <img src={myImage} alt="Sample" />
  </div>
);

export default MfReport;
