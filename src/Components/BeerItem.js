import React, { useEffect } from "react";

function BeerItem(data) {
  useEffect(() => {
    console.log("itema");
  }, []);

  return (
    <div>
      <img src={data.image_url} alt="프로필" />
      <div>{data.name}</div>
      <div>{data.tagline}</div>
      <div>{data.first_brewed}</div>
      <div>{data.description}</div>
      <div>{data.abv}</div>
    </div>
  );
}

export default BeerItem;
