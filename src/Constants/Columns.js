const Columns = [
  {
    title: "Avatar",
    field: "image_url",
    render: (rowData) => (
      <img src={rowData.image_url} style={{ height: 100 }} alt="프로필" />
    ),
  },
  { title: "name", field: "name" },
  { title: "tagline", field: "tagline" },
  { title: "first_brewed", field: "first_brewed" },
  { title: "contributed_by", field: "contributed_by" },
  { title: "abv", field: "abv" },
];

export default Columns;
