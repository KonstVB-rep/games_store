import FavoritesList from "../../components/FavoritesPageComponents/FavoritesList/FavoritesList";
import cn from "./Favorites.module.scss";


export default function Favorites() {

  return (
    <main>
      <section className={cn.favorites}>
        <FavoritesList/>
      </section>
    </main>
  );
}
