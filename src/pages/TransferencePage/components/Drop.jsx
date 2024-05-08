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

function Drop() {
  const screenWidth = window.innerWidth;
  let dropPosition;

  if (screenWidth < 450) {
    dropPosition = { top: -30, right: -160, width: 650, height: 930 };
  } else if (screenWidth < 600) {
    dropPosition = { top: -50, right: -160, width: 845, height: 970 };
  } else if (screenWidth < 1000) {
    dropPosition = { top: -30, right: -230, width: 9999, height: 865 };
  } else if (screenWidth < 1580) {
    dropPosition = { top: -100, right: -190, width: 675, height: 670 };
  } else {
    dropPosition = { top: -100, right: -100, width: 675, height: 670 };
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
