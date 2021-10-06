const GET_COLUMNS = "get_columns";
const CHANGE_COLUMNS = "change_columns";

export const changeColumns = (from, to) => ({
  type: CHANGE_COLUMNS,
  payload: { from, to },
});

export const getColumns = () => ({
  type: GET_COLUMNS,
});

const initialState = [
  {
    title: "Avatar",
    field: "image_url",
    render: (rowData) => (
      <img
        src={rowData.image_url}
        style={{ height: "100px", width: "60px" }}
        alt="프로필"
      />
    ),
  },
  { title: "name", field: "name" },
  { title: "tagline", field: "tagline" },
  { title: "first_brewed", field: "first_brewed" },
  { title: "contributed_by", field: "contributed_by" },
  { title: "abv", field: "abv" },
];

function columns(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COLUMNS:
      const { from, to } = action.payload;
      const copied = [...state];
      const target = state[from];

      copied.splice(from, 1); //state에서 해당 요소를 제거
      copied.splice(to, 0, target); //to index에 아무것도 제거하지 않고 target을 추가한다
      return copied;
    default:
      return state;
  }
}

export default columns;
