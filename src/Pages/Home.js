import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { Api } from "Utils";

const Home = () => {
  const [beerLists, setBeerLists] = useState([]);

  useEffect(() => {
    Api.getBeerLists()
      .then((res) => {
        console.log(res.data.slice(0, 3));
        setBeerLists(res.data.slice(0, 3));
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <Container>
      <h1>
        Beer<Text>?</Text> 비워!
      </h1>
      <Link to="/beerlist">비어 목록 보러가기</Link>
      <Inner>
        {beerLists.length > 0 &&
          beerLists.map((beer) => (
            <Item>
              <img
                key={beer.id}
                src={beer.image_url}
                alt="사진"
                width="70px"
                height="150px"
              />
              <Inner>
                <h3>{beer.name}</h3>
                <p>{beer.description}</p>
              </Inner>
            </Item>
          ))}
      </Inner>
      <h1>...</h1>
    </Container>
  );
};

export default Home;

const shake = keyframes`
  from {
    transform : skew(-30deg)
  } 
  to {
    transform : skew(0deg)
  }
`;

const Container = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  display: inline-block;
  animation: ${shake} 1s 5s infinite linear alternate;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.div`
  width: 400px;

  display: flex;
  border: 1px solid black;

  & + & {
    margin-top: 20px;
  }

  img {
    margin-right: 20px;
  }
`;
