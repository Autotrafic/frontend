import styled from "styled-components";
import { colors } from "../utils/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./faqAccordionStyled.css";
import { FAQ } from "../utils/constants";

const bigPhoneScreenMedia = "476px";

export default function FrequentAskedQuestions() {
  const Container = styled.div`
    width: 100%;
    display: flex;
    gap: 40px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 120px;
    margin-bottom: 50px;
    padding: 0 20px;

    @media (max-width: ${bigPhoneScreenMedia}) {
      margin-top: 40px;
      margin-bottom: 0;
      gap: 15px;
      width: 100%;
    }
  `;
  const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  `;
  const Title = styled.h2`
    margin: 0;

    @media (max-width: ${bigPhoneScreenMedia}) {
      font-size: 21px;
      text-align: center;
    }
  `;

  const Line = styled.div`
    width: 40%;
    height: 3px;
    background-color: ${colors.primaryColor};
    border-radius: 5px;
  `;

  const FaqContainer = styled.div`
    max-width: 70%;

    @media (max-width: ${bigPhoneScreenMedia}) {
      max-width: 330px;
    }
  `;

  const [isClicked, setIsClicked] = useState(false);

  const toggleFaq = (index) => {
    if (isClicked === index) {
      return setIsClicked(false);
    } else {
      setIsClicked(index);
    }
  };
  return (
    <Container>
      <TitleContainer>
        <Title>PREGUNTAS FRECUENTES</Title>
        <Line />
      </TitleContainer>
      <FaqContainer>
        <div className="accordion">
          {FAQ.map((item, index) => (
            <div
              key={index}
              className={`faq ${isClicked === index ? "show-faq" : ""}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="title">
                <h1 className={`item-question ${isClicked === index ? "show-item-question" : ""}`}>
                  {item.question}
                </h1>
                {isClicked === index ? (
                  <FontAwesomeIcon icon={faMinus} style={{ color: "#ffffff" }} />
                ) : (
                  <FontAwesomeIcon icon={faPlus} />
                )}
              </div>

              <div className={`content ${isClicked === index ? "show-content" : ""}`}>
                <p className={`item-answer ${isClicked === index ? "show-item-answer" : ""}`}>
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </FaqContainer>
    </Container>
  );
}
