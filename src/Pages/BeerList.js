import React, { useCallback, useEffect, useState } from "react";
import MaterialTable from "material-table";
import styled, { keyframes } from "styled-components";
import { Api, Filtering } from "Utils";
import Filters from "Components/FilterLists";
import { useDispatch, useSelector } from "react-redux";
import { changeColumns } from "Modules/columns";
import { Link } from "react-router-dom";
import { addBasket } from "Modules/baskets";
import BeerItem from "Components/BeerItem";
import Modals from "Modals/Modals";

function BeerList() {
  const [beerLists, setBeerLists] = useState([]);
  const [filteredLists, setFilteredLists] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const columns = useSelector((state) => state.columns);
  const dispatch = useDispatch();

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const handleFilterChange = useCallback(() => {
    const result = Filtering(selectedFilters, beerLists);
    setFilteredLists(result);
  }, [selectedFilters, beerLists]);

  useEffect(() => {
    Api.getBeerLists()
      .then((res) => {
        setBeerLists(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    if (selectedFilters.length > 0) handleFilterChange();
  }, [handleFilterChange, selectedFilters]);

  return (
    <Container>
      <Inner>
        <Link to="/home">Take me To HOME</Link>
        <Filters
          filterOpen={filterOpen}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          toggleFilter={toggleFilter}
        />
      </Inner>
      <Inner>
        <MaterialTable
          onColumnDragged={(from, to) => {
            dispatch(changeColumns(from, to));
          }}
          title="Beer Lists"
          columns={columns}
          data={selectedFilters.length > 0 ? filteredLists : beerLists}
          onRowClick={(event, rowData) => (
            <Modals customOpen={true}>
              <BeerItem data={rowData} />
            </Modals>
          )}
          actions={[
            {
              icon: "add",
              tooltip: "장바구니에 추가",
              onClick: (event, rowData) => {
                const data = { id: rowData.id, name: rowData.name };
                dispatch(addBasket(data));
              },
            },
          ]}
          options={{
            actionsColumnIndex: -1,
          }}
        />
      </Inner>
    </Container>
  );
}

export default React.memo(BeerList);

const Container = styled.main`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
`;

const Inner = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
