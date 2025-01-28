import React, { use, useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((respone) => respone.json())
      .then((json) => {
        setData(json);
        //setData(json.slice(0, 5)); For only first five data
        console.log(json);
        setLoading(false);
      })
      .catch((error) => console.log("Error in fetching data", error));
    setLoading(false);
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearch(value); // Update the search state
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <input
        placeholder="Search any data here..."
        type="text"
        value={search}
        onChange={handleSearch}
        style={{
            padding: "10px",
            width: "90%",
            margin: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
      />
      {filteredData.length > 0 ? (
        <ul>
          {filteredData.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
    // To showcase all data of API
    // <ul>
    //   {data.map((item) => (
    //     <li key={item.id}>{item.title}</li>
    //   ))}
    // </ul>
  );
};

export default FetchData;
