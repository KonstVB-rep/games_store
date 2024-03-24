import cn from './styles.module.scss';

const SkeletonSlider = () => {
    return (
        <div className={cn['skeleton-slider']}>
            <span className={cn['skeleton-slider__title']}></span>

            <div className={cn['skeleton-slider__list']}>
                <div className={cn['skeleton-slider__item']}></div>

                <div className={cn['skeleton-slider__item']}></div>

                <div className={cn['skeleton-slider__item']}></div>

                <div className={cn['skeleton-slider__item']}></div>
            </div>
        </div>
    );
};

export default SkeletonSlider;
