// //search & fakestore
import React, { useEffect, useState } from "react";

const Api = () => {
  const [api, setApi] = useState({ products: [] });
  const [search, setSearch] = useState("");

  // Fetching data from the API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((val) => {
        setApi({ products: val });
      });
  }, []); 
  const valueSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search products..." 
        onChange={valueSearch} 
        value={search}
      />

      <div className="grid-container">
        {api.products
          .filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
          .map((product) => (
            <div key={product.id} className="grid-item">
              <img src={product.image} alt={product.title} width="100" />
              <p>{product.title}</p>
              <p>${product.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Api;
