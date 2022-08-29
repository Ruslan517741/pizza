import './emptyBasket.scss';

import emptyBasket from '../../resources/img/emptyBasket.png';
import smile from '../../resources/img/smile.png';

const EmptyBasket = () => {
    return (
        <div className='emptyBasket'>
            <div className="emptyBasket__title">Корзина пустая <img src={smile} alt="smile" /></div>
            <div className="emptyBasket__prompt">Вероятней всего, вы не заказывали ещё пиццу. <br/>
Для того, чтобы заказать пиццу, перейди на главную страницу.</div>
            <img className="emptyBasket__img" src={emptyBasket} alt="Empty Basket"/>
            <button className="emptyBasket__backButton">Вернуться назад</button>

        </div>
    )
}

export default EmptyBasket;