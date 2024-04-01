import { Content } from 'components/ShopPageComponents';
import { useSelector } from 'react-redux';

import ErrorPage from '../ErrorPage';

import cn from './styles.module.scss';

const ShopPage = () => {
    const { status } = useSelector((state) => state.games);

    if (status === 'rejected') return <ErrorPage id="error" />;

    return (
        <main className={cn.main}>
            <div className="container">
                <Content />
            </div>

            <div className="bg-shoppage" />
        </main>
    );
};

export default ShopPage;
