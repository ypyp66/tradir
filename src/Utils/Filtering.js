const Filtering = (value, beerLists) => {
  const [from, to = 1000] = value
    .split("-")
    .map((item) => Number(item) || 1000);

  return beerLists.filter((item) => item.abv >= from && item.abv <= to);
};

export default Filtering;
