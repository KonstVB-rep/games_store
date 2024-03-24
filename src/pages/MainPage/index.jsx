import useLoadGames from './hooks/useLoadGames';
import { GamesList, Skeleton } from 'components/MainPageComponents';
import MotionContainer from 'components/MotionContainer';
import ErrorPage from '../ErrorPage';

import cn from './styles.module.scss';

const MainPage = () => {
    const { status, handleClick, isEnd } = useLoadGames();

    if (status === 'rejected') return <ErrorPage />;

    return (
        <main>
            <div className="container">
                <MotionContainer className={cn.section}>
                    <GamesList />

                    <Skeleton />
                </MotionContainer>
                
                {!isEnd && (
                    <button className={cn['load-more']} onClick={handleClick}>
                        Load more
                    </button>
                )}
            </div>
        </main>
    );
};

export default MainPage;
