import useSearchGame from "./useSearchGame/useSearchGame";
import {SearchItem} from "../../components/SearchPageComponents/SearchItem";
import SearchField from "../../components/SearchPageComponents/SearchField/SearchField";
import cn from "./SearchPage.module.scss";

const SearchPage = () => {

  const {handleSearch,handleSubmit,searchValue} = useSearchGame();

  return (
    <main>
      <form className = {cn.form} onSubmit = {handleSubmit}>
        <SearchField searchValue={searchValue} handleSearch={handleSearch}/>
      </form>
      <SearchItem />
    </main>
  )
};


export default SearchPage;
