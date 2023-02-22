import React, {useState} from "react";
import cn from "./SearchPage.module.scss";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <main>
      <form className = {cn.form} onSubmit = {handleSubmit}>
        <label>
          <input className = {cn.input} type = "text" placeholder = "Enter the name of the game" value = {searchValue}
                 onChange = {(e) => setSearchValue(e.target.value)} />
        </label>
        <button type = "submit" className = {cn.btn} />
      </form>
      <div></div>
    </main>
  )
};

export default SearchPage;
