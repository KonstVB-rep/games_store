import React from "react";

import useSearchGame from "../../../pages/SearchPage/useSearchGame/useSearchGame";
import cn from "../../../pages/SearchPage/SearchPage.module.scss";

const FormSearch = () => {
  const {handleSearch, handleSubmit, searchValue} = useSearchGame();

  return(
    <form className = {cn.form} onSubmit = {handleSubmit}>
      <label>
        <input className = {cn.input}
               type = "text"
               placeholder = "Search game"
               value = {searchValue}
               onChange = {handleSearch} />
      </label>
      <button type = "submit" className = {cn.btn} />
    </form>
  )
}

export default FormSearch;