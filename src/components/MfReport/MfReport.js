import React from "react";
import myImage from "../../assets/fundLogo.png";
import styles from "./MfReport.module.scss";

const MfReport = () => {
  console.log(styles, "styles");
  return (
    <div className="container">
      <h1 className={styles.title}>Hello from MF Report</h1>
      <img src={myImage} alt="Sample" />
    </div>
  );
};

export default MfReport;
