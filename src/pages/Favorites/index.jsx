import { FavoritesList } from 'components/FavoritesPageComponents';
import MotionContainer from 'components/MotionContainer';

import cn from './styles.module.scss';

export default function Favorites() {
    return (
        <div className="container">
            <MotionContainer>
                <section className={cn.favorites}>
                    <FavoritesList />
                </section>
            </MotionContainer>
        </div>
    );
}
