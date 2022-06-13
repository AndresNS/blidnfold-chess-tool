import React from "react";
import "./styles.css";

import TextField from "../../modules/TextField";
import Button from "../../modules/Button";

const SearchBar = ({ className }) => {
  return (
    <div className={`search-bar ${className}`}>
      <TextField className={"search-bar__textfield"} />
      <Button text={"Go"} />
    </div>
  );
};

export default SearchBar;
