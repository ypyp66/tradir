import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Modals from "Modals/Modals";
import BasketItem from "./BasketItem";
import { removeBasket } from "Modules/baskets";

function Bucket({ location }) {
  const [isOpen, setIsOpen] = useState(false);
  const [path, setPath] = useState();
  const baskets = useSelector((state) => state.baskets);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRemove = (id) => {
    dispatch(removeBasket(id));
  };

  useEffect(() => {
    location === "/beerlist"
      ? setPath(
          "M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"
        )
      : setPath(
          "M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"
        );
  }, [location]);

  return (
    <>
      <Container>
        <Inner
          onClick={() => {
            history.push(location === "/beerlist" ? "/home" : "/beerlist");
          }}
        >
          <SVG
            xmlns="http://www.w3.org/2000/svg"
            height="70px"
            viewBox="0 0 24 24"
            width="70px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d={path} />
          </SVG>
        </Inner>
        <Inner
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <SVG
            xmlns="http://www.w3.org/2000/svg"
            height="70px"
            viewBox="0 0 24 24"
            width="70px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M22 9h-4.79l-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM12 4.8L14.8 9H9.2L12 4.8zM18.5 19l-12.99.01L3.31 11H20.7l-2.2 8zM12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </SVG>
        </Inner>
      </Container>
      <Modals isOpen={isOpen} setIsOpen={setIsOpen} title="장바구니 목록">
        {baskets.map((basket) => (
          <BasketItem
            key={basket.id}
            data={basket}
            handleRemove={handleRemove}
          />
        ))}
      </Modals>
    </>
  );
}

export default Bucket;

const Container = styled.footer`
  width: 90%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 50px;
  right: 50px;
`;

const Inner = styled.div``;

const SVG = styled.svg`
  padding: 10px;
  border: 1px solid gray;
  background-color: white;
  border-radius: 50px;
  box-shadow: lightgray 1px 4px 5px 0px;

  :hover {
    background-color: #a5d8ff;
  }
`;
