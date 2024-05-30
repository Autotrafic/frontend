import FooterDesktop from "../../components/FooterDesktop";
import FooterMobile from "../../components/FooterMobile";

export default function FooterContainer() {
  const screenWidth = window.innerWidth;

  const isMobile = screenWidth < 415 ? true : false;

  return <>{isMobile ? <FooterMobile /> : <FooterDesktop />}</>;
}
