import { removeBasket } from "Modules/baskets";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

function BasketItem({ data }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    console.log(data.id);
    dispatch(removeBasket(data.id));
  };

  return (
    <div>
      {data.name} <Button onClick={handleRemove}>❌</Button>
    </div>
  );
}

export default BasketItem;

const Button = styled.button`
  border: none;
  background-color: white;
`;
