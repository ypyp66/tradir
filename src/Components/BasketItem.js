import React from "react";
import styled from "styled-components";

function BasketItem({ data, handleRemove }) {
  return (
    <div>
      {data.name} <Button onClick={() => handleRemove(data.id)}>❌</Button>
    </div>
  );
}

export default BasketItem;

const Button = styled.button`
  border: none;
  background-color: white;
`;
