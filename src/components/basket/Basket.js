import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearBasket, changeAmountOfPizzasAndTotalPrice } from '../basket/basketSlice';
import BasketItem from "../basketItem/BasketItem";

import './basket.scss';

import basketImg from '../../resources/img/basket.png';
import clearBasketImg from "../../resources/img/clearBasket.svg";
import leftArrow from "../../resources/img/leftArrow.svg";
import emptyBasketImg from '../../resources/img/emptyBasket.png';
import smile from '../../resources/img/smile.png';

const Basket = () => {
    const basket = useSelector(state => state.basket.basket);
    const amountOfPizzas = useSelector(state => state.basket.amountOfPizzas);
    const totalPrice = useSelector(state => state.basket.totalPrice);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeAmountOfPizzasAndTotalPrice());
    }, [basket]);

    const renderBasketItems = (arr) => {
        return arr.map(({...props}, i) => {
            return (
                <BasketItem key={i} {...props}/>
            )
        })
    }

    const elements = renderBasketItems(basket);

    if (basket.length) {
        return (
            <div className="basket">
                <Helmet>
                    <meta
                        name="description"
                        content="Basket with your pizzas"
                        />
                     <title>Basket</title>   
                </Helmet>
                <div className="basket__header">
                    <div className="basket__header-title">
                        <img src={basketImg} alt="basket" />
                        Корзина
                    </div>
                    <button className="basket__header-clearBasketButton" onClick={() => dispatch(clearBasket())}>
                        <img src={clearBasketImg} alt="clearBasket" />
                        Очистить корзину
                    </button>
                </div>
                
                <div className="basket__items">
                    {elements}
                    <div className="basket__total">
                        <div className="basket__total-amountOfPizzas">Всего пицц: <span>{amountOfPizzas} шт</span></div>
                        <div className="basket__total-totalPrice">Сумма заказа: <span>{totalPrice}</span></div>
                    </div>
                    <div className="basket__buttons">
                        <Link to="/" className="basket__buttons-back">
                            <img src={leftArrow} alt="leftArrow" />
                            Вернуться назад
                        </Link>
                        <button className="basket__buttons-pay">Оплатить сейчас</button>
                    </div>
                    
    
                </div>
            </div>
        )
    } else {
        return (
            <div className='emptyBasket'>
                <div className="emptyBasket__title">Корзина пустая <img src={smile} alt="smile" /></div>
                <div className="emptyBasket__prompt">Вероятней всего, вы не заказывали ещё пиццу. <br/>
    Для того, чтобы заказать пиццу, перейди на главную страницу.</div>
                <img className="emptyBasket__img" src={emptyBasketImg} alt="Empty Basket"/>
                <Link to="/" className="emptyBasket__backButton">Вернуться назад</Link>
    
            </div>
        )
    }
    
}

export default Basket;