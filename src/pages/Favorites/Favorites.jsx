import FavoritesList from "../../components/FavoritesPageComponents/FavoritesList/FavoritesList";
import cn from "./Favorites.module.scss";
import {MotionMain} from "../../components/MotionMain";


export default function Favorites() {

  return (
    <MotionMain>
      <section className={cn.favorites}>
        <FavoritesList/>
      </section>
    </MotionMain>
  );
}
