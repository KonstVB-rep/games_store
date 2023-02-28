import {selectFavorites} from "../../store/games/gamesSlice";
import {useSelector} from "react-redux";
import ShortCard from "../../components/ShortCard/ShortCard";
import cn from "./Favorites.module.scss";
import CardFavorite from "../../components/FavoritesPageComponents/CardFavorite/CardFavorite";

export default function Favorites() {
  const favoritesList = useSelector(selectFavorites);

  const renderFavoritesList = favoritesList.map((item) => (
    <CardFavorite key={item.id} game={item}/>
  ));

  return (
    <main>
      <section>
        <div className={cn.content}>{renderFavoritesList}</div>
      </section>
    </main>
  );
}
