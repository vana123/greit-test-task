import React from "react";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 0 5px;
  border: none;
  background: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 5px;

  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
`;

const Pagination = ({ currentPage, setCurrentPage }) => {
  return (
    <PaginationContainer>
      <Button 
        onClick={() => setCurrentPage((p) => Math.max(p - 1, 0))}
        disabled={currentPage === 0}
      >
        ⬅ Попередня
      </Button>
      <span> Сторінка {currentPage + 1} </span>
      <Button onClick={() => setCurrentPage((p) => p + 1)}>Наступна ➡</Button>
    </PaginationContainer>
  );
};

export default Pagination;
