import FavoritesList from "../../components/FavoritesPageComponents/FavoritesList/FavoritesList";
import {MotionMain} from "../../components/MotionMain";
import cn from "./Favorites.module.scss";


export default function Favorites() {

  return (
    <MotionMain>
      <section className={cn.favorites}>
        <FavoritesList/>
      </section>
    </MotionMain>
  );
}
