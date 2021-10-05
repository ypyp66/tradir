import React from "react";
import styled from "styled-components";
import Filter from "../Constants/Filter";

function Filters({ handleFilterChange }) {
  return (
    <Container>
      <label for="filter">도수 필터</label>
      <select name="filter" onChange={handleFilterChange}>
        {Filter.map((filter) => (
          <option key={filter.id} value={Filter.name}>
            {filter.name}
          </option>
        ))}
      </select>
    </Container>
  );
}

export default React.memo(Filters);

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
