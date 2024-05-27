import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SmartForm from "smartForm/SmartForm";
import TransferContentMobile from "./TransferContentMobile";
import ProsMobile from "./ProsMobile";
import Drop from "./Drop";

const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  padding: 3em 1.5em;
  display: flex;
  gap: 10vw;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 1.2em 1.2em;
  }
`;

const LeftSide = styled.div`
  flex: 4;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const RightSide = styled.div`
  position: relative;
  width: 100%;
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SmartFormContainer = styled.div`
  width: 100%;
  padding: 5px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2), 2px 0 5px rgba(0, 0, 0, 0.2),
    -4px 0 5px rgba(0, 0, 0, 0.2);
`;

export default function TransferMobile() {
  const [smartFormHeight, setSmartFormHeight] = useState(0);
  const smartFormRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === smartFormRef.current) {
          setSmartFormHeight(entry.contentRect.height);
        }
      }
    });

    if (smartFormRef.current) {
      resizeObserver.observe(smartFormRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [smartFormRef]);

  return (
    <Container>
      <LeftSide>
        <TransferContentMobile />
      </LeftSide>
      <RightSide ref={smartFormRef}>
        <SmartFormContainer>
          <SmartForm />
        </SmartFormContainer>
        <Drop smartFormHeight={smartFormHeight} />
        <ProsMobile />
      </RightSide>
    </Container>
  );
}
