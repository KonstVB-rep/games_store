import { FavoritesList } from 'components/FavoritesPageComponents';
import MotionContainer from 'components/MotionContainer';

import cn from './styles.module.scss';

const Favorites = () => {
    return (
        <main className={cn.main}>
            <div className="container">
                <MotionContainer>
                    <section className={cn.favorites}>
                        <FavoritesList />
                    </section>
                </MotionContainer>
            </div>
        </main>
    );
};

export default Favorites;
