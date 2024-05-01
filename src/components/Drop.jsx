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

const dropStyles = { position: "absolute", top:-100, right: -100, zIndex: -1 };

function Drop() {
  return <Lottie options={defaultOptions} height={670} width={675} style={dropStyles} />;
}

export default Drop;
