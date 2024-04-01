import { CartList, PaymentGroup } from 'components/CartPageComponents';
import MotionContainer from 'components/MotionContainer';
import PaymentContextProvider from 'contexts/PaymentContextProvider';

import cn from './styles.module.scss';

const CartPage = () => {
    return (
        <div className="container">
            <MotionContainer className={cn.main}>
                <div className={cn.section}>
                    <CartList />

                    <PaymentContextProvider>
                        <PaymentGroup />
                    </PaymentContextProvider>
                </div>
            </MotionContainer>
        </div>
    );
};

export default CartPage;
