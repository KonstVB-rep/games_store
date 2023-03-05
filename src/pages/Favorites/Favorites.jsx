import {selectFavorites} from "../../store/games/gamesSlice";
import {useSelector} from "react-redux";
import cn from "./Favorites.module.scss";
import CardFavorite from "../../components/FavoritesPageComponents/CardFavorite/CardFavorite";
import {TitleEmptyPage} from "../../components/TitleEmptyPage";
import BackButton from "../../components/Buttons/BackButton/BackButton";

export default function Favorites() {
  const favoritesList = useSelector(selectFavorites);

  const renderFavoritesList = favoritesList.map((item) => (
    <CardFavorite key={item.id} game={item}/>
  ));

  return (
    <main>
      <section className={cn.favorites}>
        <BackButton/>
        {renderFavoritesList.length ?
          <div className = {cn.favorites__content}>{renderFavoritesList}</div> :
          <TitleEmptyPage text='The favorites list is empty'/>}
      </section>
    </main>
  );
}
