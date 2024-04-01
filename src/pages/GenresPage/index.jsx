import { Content, Slider } from 'components/GenresPageComponents';

import useGenres from './hooks/useGenres';

import cn from './styles.module.scss';

const GenresPage = () => {
    const { genres, isLoading, games, activeSlide, setActiveSlide } = useGenres();

    return (
        <div className={cn.section}>
            <Slider genres={genres} setActiveSlide={setActiveSlide} />
            <div className="container">
                <Content
                    isLoading={isLoading}
                    description={genres?.[activeSlide]?.description}
                    games={games}
                />
            </div>
        </div>
    );
};

export default GenresPage;
