import './basket.scss';
import basket from '../../resources/img/basket.png';
import pizzaChiz from "../../resources/img/pizzaChiz.png";
import cheesy from "../../resources/img/cheesy.png";
import chick from "../../resources/img/chick.png";
import shrimps from "../../resources/img/shrimps.png";


const Basket = () => {
    return (
        <div className="basket">
            <div className="basket__title">
                <img src={basket} alt="basket" />
                Корзина
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
                            <button className="basket__item-minusButton">-</button>
                            <div className="basket__item-number">2</div>
                            <button className="basket__item-plusButton">+</button>
                        </div>
                        <div className="basket__item-price">770 грн</div>
                        <button className="basket__item-close">x</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket;