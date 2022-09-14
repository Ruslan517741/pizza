import { useDispatch } from "react-redux";

import { deletePizza, plusPizza, minusPizza } from "../basket/basketSlice";

const BasketItem = ({imageUrl, name, activeType, activeSize, price, id, pizzasTypes, counter}) => {
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
                        <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.04019 0.0399933H8.84019C9.37035 0.0399933 9.80019 0.469833 9.80019 0.999993C9.80019 1.53015 9.37035 1.95999 8.84019 1.95999H4.04019H1.1602C0.630035 1.95999 0.200195 1.53015 0.200195 0.999993C0.200195 0.469833 0.630035 0.0399933 1.1602 0.0399933H4.04019Z" fill="#FE5F1E"/>
                        </svg>
                    </button>
                    <div className="basket__item-number">{counter}</div>
                    <button className="basket__item-signButton" onClick={() => dispatch(plusPizza(id))}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#EB5A1E"/>
                        </svg>
                    </button>
                </div>
                <div className="basket__item-price">{price * counter} грн</div>
                <button className="basket__item-remove" onClick={() => dispatch(deletePizza(id))}>
                    <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.74791 6.95572L6.49931 4.70712L8.74791 2.45852C9.16184 2.04459 9.16184 1.37338 8.74791 0.959454C8.33398 0.545525 7.66277 0.545525 7.24884 0.959454L5.00024 3.20805L2.75164 0.959454C2.33771 0.545525 1.66651 0.545525 1.25258 0.959454C0.838648 1.37338 0.838648 2.04459 1.25258 2.45852L3.50118 4.70712L1.25258 6.95572C0.838649 7.36965 0.838649 8.04086 1.25258 8.45479C1.66651 8.86872 2.33772 8.86872 2.75164 8.45479L5.00024 6.20619L7.24884 8.45479C7.66277 8.86872 8.33398 8.86872 8.74791 8.45479C9.16184 8.04086 9.16184 7.36965 8.74791 6.95572Z" fill="#D0D0D0"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default BasketItem;