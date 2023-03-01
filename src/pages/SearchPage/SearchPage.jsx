import useSearchGame from "./useSearchGame/useSearchGame";
import {ListFoundGames} from "../../components/SearchPageComponents/ListFoundGames";
import SearchField from "../../components/SearchPageComponents/SearchField/SearchField";
import cn from "./SearchPage.module.scss";

const SearchPage = () => {

  const {handleSearch,handleSubmit,searchValue} = useSearchGame();

  return (
    <main>
      <form className = {cn.form} onSubmit = {handleSubmit}>
        <SearchField searchValue={searchValue} handleSearch={handleSearch}/>
      </form>
      <ListFoundGames />
    </main>
  )
};


export default SearchPage;
