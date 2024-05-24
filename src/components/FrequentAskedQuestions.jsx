import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../styles/faqAccordionStyled.css";
import { FAQ, FAQ_SECTION_ID } from "../utils/constants";
import Title from "./reusable/Title";

const bigPhoneScreenMedia = "476px";

export default function FrequentAskedQuestions() {
  const Container = styled.div`
    width: 100%;
    display: flex;
    gap: 40px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 20px;

    @media (max-width: ${bigPhoneScreenMedia}) {
      margin-bottom: 0;
      gap: 15px;
      width: 100%;
    }
  `;

  const FaqContainer = styled.div`
    max-width: 1000px;
    width: 65%;

    @media (max-width: 1035px) {
      width: 75%;
    }
    @media (max-width: 900px) {
      width: 85%;
    }
    @media (max-width: 790px) {
      width: 90%;
    }
    @media (max-width: 750px) {
      width: 100%;
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
    <Container id={FAQ_SECTION_ID}>
      <Title middleLine>Preguntas frecuentes</Title>
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
