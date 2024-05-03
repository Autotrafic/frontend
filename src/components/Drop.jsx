import Lottie from "react-lottie";
import dropAnimation from "../assets/form-drop2.json";

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: dropAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Drop({ isMobile }) {
  const dropStyles = { position: "absolute", top: -30, right: isMobile ?  -160 : -100, zIndex: -1 };

  return (
    <Lottie options={defaultOptions} height={isMobile ? 930 : 670} width={isMobile ? 650 : 675} style={dropStyles} />
  );
}

export default Drop;
