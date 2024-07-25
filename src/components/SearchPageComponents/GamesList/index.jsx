import { memo } from 'react';

import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

import Spinner from '../../ui/Spinner';
import Game from '../Game';

import cn from './styles.module.scss';

const GamesList = memo(() => {
    const { status, gamesList } = useSelector((state) => state.search);

    const renderFoundGames = gamesList.map(({ name, id, img }) => (
        <Game key={id} name={name} id={id} img={img} />
    ));
    if (status === 'idle') {
        return (
            <h1 className={cn['title-searchpage']}>
                Enter the keyword from the name of the game and press the search button or the enter
                key
            </h1>
        );
    }

    if (status === 'rejected') {
        return (
            <h1 className={cn['title-searchpage']}>Something went wrong!We are working on it</h1>
        );
    }
    if (status === 'fulfilled' && !renderFoundGames.length) {
        return <h1 className={cn['title-searchpage']}>No results found for your query</h1>;
    }
    return (
        <section>
            <h1 className="visually-hidden">List of game titles</h1>

            {status === 'loading' ? (
                <Spinner />
            ) : (
                <>
                    <motion.ul
                        className={cn['games-list']}
                        initial={{ opacity: 0, height: 0, y: 300 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                        {renderFoundGames}
                    </motion.ul>
                </>
            )}
        </section>
    );
});

export default GamesList;
