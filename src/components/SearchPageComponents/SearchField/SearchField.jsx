import React from 'react';
import cn from "../../../pages/SearchPage/SearchPage.module.scss";

const SearchField = ({searchValue,handleSearch}) => {
  return (
    <>
      <label>
        <input className = {cn.input}
               type = "text"
               placeholder = "Search game"
               value = {searchValue}
               onChange = {handleSearch} />
      </label>
      <button type = "submit" className = {cn.btn} />
    </>
  );
};

export default SearchField;