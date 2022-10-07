import { TriangleUpIcon } from "@chakra-ui/icons";
import { Center, color, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
 

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Center>
      <button className="Button">
        <TriangleUpIcon
          color={useColorModeValue("gray.300", "gray.900")}
          className="Button"
          w={14}
          h={14}
          my={1.5}
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
        ></TriangleUpIcon>
      </button>
    </Center>
  );
};

export default ScrollButton;
