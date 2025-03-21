import React from "react";
import styled, { keyframes } from "styled-components";

// Анімація обертання
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px; /* Висота блоку */
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 6px solid rgba(0, 123, 255, 0.2);
  border-top: 6px solid #007bff; /* Основний колір */
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
