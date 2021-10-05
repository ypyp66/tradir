import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import styled from "styled-components";
import { Api, Filtering } from "../Utils";
import Filters from "../Components/Filters";
import { useDispatch, useSelector } from "react-redux";
import { changeColumns } from "../Modules/columns";
import { Link } from "react-router-dom";
import { forwardRef } from "react";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

function BeerList() {
  const [beerLists, setBeerLists] = useState([]);
  const [filteredLists, setFilteredLists] = useState(null);
  const columns = useSelector((state) => state.columns);
  const dispatch = useDispatch();

  useEffect(() => {
    Api.getBeerLists()
      .then((res) => {
        console.log(res.data);
        setBeerLists(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleFilterChange = (e) => {
    setFilteredLists(Filtering(e.target.value, beerLists));
  };

  return (
    <Container>
      <Inner>
        <Link to="/home">Go To HOME</Link>
      </Inner>
      <Inner>
        <MaterialTable
          icons={tableIcons}
          onColumnDragged={(from, to) => {
            dispatch(changeColumns(from, to));
          }}
          columns={columns}
          data={filteredLists ?? beerLists}
        />
        <Filters handleFilterChange={handleFilterChange} />
      </Inner>
    </Container>
  );
}

export default React.memo(BeerList);

const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
`;

const Inner = styled.div`
  display: flex;
`;
