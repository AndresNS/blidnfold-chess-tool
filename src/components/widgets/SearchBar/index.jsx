import React, { useState } from "react";
import "./styles.css";

import TextField from "../../modules/TextField";
import Button from "../../modules/Button";

const config = {
  SEARCH_ENGINE_URL: "https://duckduckgo.com/",
};

const SearchBar = ({ className }) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (event) => setSearch(event.target.value);

  const handleSubmit = (event) => {
    event && event.preventDefault();
    if (search === "") return;

    window.location.href = `${config.SEARCH_ENGINE_URL}?q=${search}`;
  };

  return (
    <form className={`search-bar ${className}`} onSubmit={handleSubmit}>
      <TextField
        className={"search-bar__textfield"}
        value={search}
        onChange={handleInputChange}
        name="q"
      />
      <Button text={"Go"} onClick={handleSubmit} />
    </form>
  );
};

export default SearchBar;
