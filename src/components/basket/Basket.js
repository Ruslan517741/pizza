import './basket.scss';

import basket from '../../resources/img/basket.png';
import pizzaChiz from "../../resources/img/pizzaChiz.png";
import chick from "../../resources/img/chick.png";
import shrimps from "../../resources/img/shrimps.png";
import plus from "../../resources/img/plus.png";
import minus from "../../resources/img/minus.png";
import cross from "../../resources/img/cross.png";
import clearBasket from "../../resources/img/clearBasket.svg";
import leftArrow from "../../resources/img/leftArrow.svg";


const Basket = () => {
    return (
        <div className="basket">
            <div className="basket__header">
                <div className="basket__header-title">
                    <img src={basket} alt="basket" />
                    Корзина
                </div>
                <button className="basket__header-clearBasketButton">
                    <img src={clearBasket} alt="clearBasket" />
                    Очистить корзину
                </button>
            </div>
            
            <div className="basket__items">
                <div className="basket__item">
                    <div className="basket__item-wrapper">
                        <div className="basket__item-pizza">
                            <img src={chick} alt="pizza" />
                            <div className="basket__item-discription">
                                <div className="basket__item-title">Сырный цыпленок</div>
                                <div className="basket__item-type">тонкое тесто, 26 см.</div>
                            </div>
                        </div>
                        <div className="basket__item-amount">
                            <button className="basket__item-signButton">
                                <img src={minus} alt="minus" />
                            </button>
                            <div className="basket__item-number">2</div>
                            <button className="basket__item-signButton">
                                <img src={plus} alt="plus" />
                            </button>
                        </div>
                        <div className="basket__item-price">770 грн</div>
                        <button className="basket__item-close">
                            <img src={cross} alt="cross" />
                        </button>
                    </div>
                </div>
                <div className="basket__item">
                    <div className="basket__item-wrapper">
                        <div className="basket__item-pizza">
                            <img src={shrimps} alt="pizza" />
                            <div className="basket__item-discription">
                                <div className="basket__item-title">Креветки по-азиатски</div>
                                <div className="basket__item-type">толстое тесто, 40 см.</div>
                            </div>
                        </div>
                        <div className="basket__item-amount">
                            <button className="basket__item-signButton">
                                <img src={minus} alt="minus" />
                            </button>
                            <div className="basket__item-number">2</div>
                            <button className="basket__item-signButton">
                                <img src={plus} alt="plus" />
                            </button>
                        </div>
                        <div className="basket__item-price">290 грн</div>
                        <button className="basket__item-close">
                            <img src={cross} alt="cross" />
                        </button>
                    </div>
                </div>
                <div className="basket__item">
                    <div className="basket__item-wrapper">
                        <div className="basket__item-pizza">
                            <img src={pizzaChiz} alt="pizza" />
                            <div className="basket__item-discription">
                                <div className="basket__item-title">Чизбургер-пицца</div>
                                <div className="basket__item-type">тонкое тесто, 30 см.</div>
                            </div>
                        </div>
                        <div className="basket__item-amount">
                            <button className="basket__item-signButton">
                                <img src={minus} alt="minus" />
                            </button>
                            <div className="basket__item-number">2</div>
                            <button className="basket__item-signButton">
                                <img src={plus} alt="plus" />
                            </button>
                        </div>
                        <div className="basket__item-price">350 грн</div>
                        <button className="basket__item-close">
                            <img src={cross} alt="cross" />
                        </button>
                    </div>
                </div>
                <div className="basket__total">
                    <div className="basket__total-amountOfPizzas">Всего пицц: <span>3 шт</span></div>
                    <div className="basket__total-orderPrice">Сумма заказа: <span>900 грн</span></div>
                </div>
                <div className="basket__buttons">
                    <button className="basket__buttons-back">
                        <img src={leftArrow} alt="leftArrow" />
                        Вернуться назад
                    </button>
                    <button className="basket__buttons-pay">Оплатить сейчас</button>
                </div>
                

            </div>
        </div>
    )
}

export default Basket;