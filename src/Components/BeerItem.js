import styled from "styled-components";
import React from "react";

function BeerItem({ data }) {
  return (
    <div>
      <img src={data.image_url} width="50px" height="120px" alt="프로필" />
      <Title>
        <h2>{data.name}</h2>
        <p>by {data.contributed_by}</p>
      </Title>

      <p>{data.tagline}</p>
      <p>{data.first_brewed}</p>
      <strong>설명</strong>
      <p>{data.description}</p>
      <strong>도수</strong>
      <p>{data.abv}</p>
      <strong>재료</strong>
      <Ingredients>
        <div>
          <strong>hop</strong>
          {data.ingredients.hops.map((item, index) => (
            <p key={index}>
              {item.name}, {item.amount.value}
              {item.amount.unit}
            </p>
          ))}
        </div>
        <div>
          <strong>malt</strong>
          {data.ingredients.malt.map((item, index) => (
            <p key={index}>
              {item.name}, {item.amount.value}
              {item.amount.unit}
            </p>
          ))}
        </div>
      </Ingredients>
    </div>
  );
}

export default React.memo(BeerItem);

const Title = styled.div``;

const Ingredients = styled.div`
  display: flex;

  div {
    box-shadow: 1px 3px 4px 2px grey;
    padding: 5px;
  }
  div + div {
    margin-left: 10px;
  }
`;
