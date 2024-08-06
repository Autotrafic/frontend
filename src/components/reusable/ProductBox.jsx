import styled from "styled-components";

const bigPhoneScreenMedia = "510px";
const screenWidth = window.innerWidth;
const isMobile = screenWidth < 510 ? true : false;

export default function ProductBox({
  image,
  productTitle,
  productDescription,
  buttonText,
}) {
  return (
    <ProductBoxStyled>
      <ProductImageContainer>
        {isMobile ? (
          <img src={image} alt="" width={80} style={{ borderRadius: "2px" }} />
        ) : (
          <img src={image} alt="" width={120} style={{ borderRadius: "2px" }} />
        )}
      </ProductImageContainer>
      <ProductTextContainer>
        <ProductTitle>{productTitle}</ProductTitle>
        <ProductDescription>{productDescription}</ProductDescription>
        <ProductLink href="">
          <BuyContainer>
            <ButtonText>{buttonText}</ButtonText>
          </BuyContainer>
        </ProductLink>
      </ProductTextContainer>
    </ProductBoxStyled>
  );
}

const ProductBoxStyled = styled.div`
  display: flex;
  width: 480px;
  height: 220px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  background-color: white;
  transition: 0.4s;

  &:hover {
    width: 490px;
    height: 230px;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.4);
    transition: 0.2s;
  }

  @media (max-width: ${bigPhoneScreenMedia}) {
    width: 95%;
  }
`;

const ProductImageContainer = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${bigPhoneScreenMedia}) {
    width: 30%;
  }
`;

const ProductTextContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 15px 20px 0;
  max-width: 290px;
  justify-content: space-between;

  @media (max-width: ${bigPhoneScreenMedia}) {
    width: 70%;
  }
`;

const ProductLink = styled.a`
  text-decoration: none;
  display: inline-block;
`;

const ProductTitle = styled.div`
  font-weight: 600;
  font-size: 21px;
  color: #4154f1;
  transition: 0.1s;

  &:hover {
    font-weight: 700;
    transition: 0.2s;
    cursor: pointer;
  }
  @media (max-width: ${bigPhoneScreenMedia}) {
    font-size: 19px;
  }
`;

const ProductDescription = styled.div`
  font-size: 14px;
  color: #303030;
`;

const ButtonText = styled.p`
  color: white;
  font-size: 15px;
`;

const BuyContainer = styled.div`
  background-color: #4154f1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 7px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);
  transition: 0.1s;

  &:hover {
    background-color: #6f7ef9;
    transition: 0.1s;
  }
`;
