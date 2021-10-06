const Filtering = (selectedFilters, beerLists) => {
  const result = selectedFilters.reduce((acc, cur) => {
    const [min, max] = cur
      .split("~")
      .map((i, index) =>
        index === 1 ? (i === "" ? 1000 : Number(i)) : Number(i)
      );

    return [
      ...acc,
      ...beerLists.filter((item) => item.abv >= min && item.abv <= max),
    ];
  }, []);
  return result;
};

export default Filtering;
