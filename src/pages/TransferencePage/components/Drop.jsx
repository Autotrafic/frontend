import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import dropAnimation from "../../../assets/form-drop2.json";

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: dropAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Drop({ smartFormHeight }) {
  const screenWidth = window.innerWidth;

  const [dropHeight, setDropHeight] = useState();

  useEffect(() => {
    setDropHeight(smartFormHeight + 80);
  }, [smartFormHeight]);

  let dropPosition;

  if (screenWidth < 415) {
    dropPosition = { top: -30, right: -160, width: 650, height: dropHeight ?? 930 };
  } else if (screenWidth < 490) {
    dropPosition = { top: -50, right: -240, width: 895, height: dropHeight + 30 };
  } else if (screenWidth < 1000) {
    dropPosition = { top: -30, right: -237, width: 9999, height: dropHeight ?? 865 };
  } else if (screenWidth < 1580) {
    dropPosition = { top: -100, right: -190, width: 675, height: dropHeight ?? 670 };
  } else {
    dropPosition = { top: -100, right: -100, width: 675, height: dropHeight ?? 670 };
  }

  const dropStyles = {
    position: "absolute",
    top: dropPosition.top,
    right: dropPosition.right,
    zIndex: -1,
  };

  return (
    <Lottie
      options={defaultOptions}
      width={dropPosition.width}
      height={dropPosition.height}
      style={dropStyles}
    />
  );
}

export default Drop;
