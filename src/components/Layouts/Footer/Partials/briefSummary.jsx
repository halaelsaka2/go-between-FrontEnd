import React from "react";
const BriefSummary = () => {
  return (
    <React.Profiler>
      <img
        className="footerContainer__col__logo"
        src="assets/images/GoBetween.png"
        alt="logo"
      />
      <p className="footerContainer__col__text">
        Here you can use rows and columns to organize your footer content here
        you can use rows and columns to organize your footer content.
      </p>
    </React.Profiler>
  );
};

export default BriefSummary;
