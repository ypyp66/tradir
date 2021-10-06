import React from "react";
import styled, { css, keyframes } from "styled-components";
import Filter from "Constants/Filter";

function FilterLists({
  selectedFilters,
  filterOpen,
  setSelectedFilters,
  toggleFilter,
}) {
  const handleClick = (e) => {
    const { value } = e.target;

    if (selectedFilters.includes(value)) {
      setSelectedFilters((prev) => prev.filter((item) => item !== value));
    } else setSelectedFilters((prev) => [...prev, e.target.value]);
  };

  return (
    <Container filterOpen={filterOpen}>
      <H3 onClick={toggleFilter}>필터</H3>
      <Inner>
        {filterOpen &&
          Filter.map(({ id, name }) => (
            <Item
              key={id}
              selected={selectedFilters.includes(name)}
              value={name}
              onClick={handleClick}
            >
              {name}
            </Item>
          ))}
      </Inner>
    </Container>
  );
}

export default React.memo(FilterLists);

const list = keyframes`
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 20px;
  ${(props) =>
    props.filterOpen &&
    css`
      animation: ${list} 0.3s linear;
    `}
`;

const H3 = styled.h3`
  background-color: lightblue;
  border-radius: 50px;
  text-align: center;
  padding: 0px 10px;
`;

const Inner = styled.div`
  display: flex;
`;

const Item = styled.button`
  border: none;

  & + & {
    margin-left: 10px;
  }
  ${(props) =>
    props.selected &&
    css`
      background-color: wheat;
    `}
`;
