import { Button } from "antd";
import React from "react";
import { ImArrowUp2 } from "react-icons/im";

const BackToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <Button onClick={handleScrollToTop} className="flex gap-1 text-white items-center">
      <ImArrowUp2></ImArrowUp2> Top of Page
    </Button>
  );
};

export default BackToTopButton;
