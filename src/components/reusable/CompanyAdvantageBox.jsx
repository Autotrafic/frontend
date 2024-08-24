import styled from "styled-components";
import { colors } from "../../utils/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const bigPhoneScreenMedia = "510px";
const screenWidth = window.innerWidth;
const isMobile = screenWidth < 510 ? true : false;

export default function CompanyAdvantageBox({
  advantageTitle,
  advantageDescription,
  icon,
  isSpacing,
}) {
  return (
    <AdvantageBoxStyled>
      <AdvantageTitle>{advantageTitle}</AdvantageTitle>
      <AdvantageDescription>{advantageDescription}</AdvantageDescription>
      <IconContainer isSpacing={isSpacing}>
        <AdvantageIcon icon={icon} />
      </IconContainer>
    </AdvantageBoxStyled>
  );
}

const AdvantageBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 380px;
  height: 220px;
  padding: 15px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  background-color: white;

  @media (max-width: ${bigPhoneScreenMedia}) {
    width: 93%;
    height: 245px;
    padding: 10px 20px;
  }
`;

const AdvantageTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  transition: 0.1s;

  @media (max-width: ${bigPhoneScreenMedia}) {
    font-size: 19px;
  }
`;

const AdvantageDescription = styled.p`
  font-size: 15px;
  text-align: center;
  color: #393939;
`;

const IconContainer = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 5px;
  background-color: ${colors.primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isSpacing }) =>
    isSpacing &&
    `
  margin-top: 15px;
`}
`;

const AdvantageIcon = styled(FontAwesomeIcon)`
  color: white;
  height: 30px;
  width: 30px;
`;
