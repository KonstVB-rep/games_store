import ThemeSwitcher from 'components/ui/ThemeSwitcher';
import ArrowTop from '../ArrowTop';

import cn from './styles.module.scss';

const ArrowThemeBox = () => {
    return (
        <div className={cn.wrapper}>
            <div className={cn.wrapper__arrow}>
                <ArrowTop />
            </div>
            <ThemeSwitcher />
        </div>
    );
};

export default ArrowThemeBox;
