import { useState } from "react";
import { useDispatch } from "react-redux";

import { deletePizza, plusPizza, minusPizza } from "../basket/basketSlice";

import plus from "../../resources/img/plus.png";
import minus from "../../resources/img/minus.png";
import cross from "../../resources/img/cross.png";

const BasketItem = ({imageUrl, name, activeType, activeSize, price, id, pizzasTypes, counter}) => {
    let [amount, setAmount] = useState(1);
    const dispatch = useDispatch();
    

    return (
        <div className="basket__item">
            <div className="basket__item-wrapper">
                <div className="basket__item-pizza">
                    <img src={imageUrl} alt="pizza" />
                    <div className="basket__item-discription">
                        <div className="basket__item-title">{name}</div>
                        <div className="basket__item-type">{pizzasTypes[activeType]}, {activeSize} см.</div>
                    </div>
                </div>
                <div className="basket__item-amount">
                    <button className="basket__item-signButton" onClick={() => dispatch(minusPizza(id))}>
                        <img src={minus} alt="minus" />
                    </button>
                    <div className="basket__item-number">{counter}</div>
                    <button className="basket__item-signButton" onClick={() => dispatch(plusPizza(id))}>
                        <img src={plus} alt="plus" />
                    </button>
                </div>
                <div className="basket__item-price">{price * counter} грн</div>
                <button className="basket__item-close" onClick={() => dispatch(deletePizza(id))}>
                    <img src={cross} alt="cross" />
                </button>
            </div>
        </div>
    )
}

export default BasketItem;