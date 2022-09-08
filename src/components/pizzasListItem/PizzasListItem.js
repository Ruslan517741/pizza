import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addPizza } from '../basket/basketSlice';
import plus from "../../resources/img/plus.png";

const PizzasListItem = ({imageUrl, name, types, sizes, price, id}) => {
    const basket = useSelector(state => state.basket);
    const [activeType, setActiveType] = useState(types[0]);
    const [activeSize, setActiveSize] = useState(sizes[0]);
    
    const [amountSelectedPizzas, setAmountSelectedPizzas] = useState(0);
    const dispatch = useDispatch();
    

    const pizzasTypes = ['тонкое', 'традиционное'];
    const pizzasSizes = [26, 30, 40];


    console.log(basket);
    /* const countAmountSelectedPizzas = (value) => {

    } */

    const renderPizzasTypes = (arr) => {
        return arr.map((item, i) => {
            return (
                <button 
                    key={i}
                    className={`pizzasType__item ${activeType === i ? 'pizzasType__item-active' : null}`} 
                    disabled={!types.some(type => type === i)}
                    onClick={() => setActiveType(i)}>
                        {item}
                </button>
            )
        });
    }

    const renderPizzasSizes = (arr) => {
        return arr.map((item, i) => {
            return (
                <button 
                    key={i}
                    className={`pizzasSize__item ${activeSize === item ? 'pizzasSize__item-active' : null}`} 
                    disabled={!sizes.some(size => size === item)}
                    onClick={() => setActiveSize(item)}>
                        {item} см
                </button>
            )
        });
    }
    const counter = 1;
    const typeElements = renderPizzasTypes(pizzasTypes);
    const sizeElements = renderPizzasSizes(pizzasSizes);
    return (
        <div className="pizzasList__item">
            <img src={imageUrl} alt="pizza" className="pizzasList__item-img" />
            <div className="pizzasList__item-title">{name}</div>
            <div className="pizzasList__item-selectMenu">
                <div className="pizzasType">
                    {typeElements}
                </div>
                <div className="pizzasSize">
                    {sizeElements}
                </div>
            </div>
            <div className="pizzasList__item-wrapper">
                <div className="pizzasList__item-price">от {price}грн</div>
                <button className="pizzasList__item-addButton" onClick={() => dispatch(addPizza({imageUrl, name, activeType, activeSize, price, id, pizzasTypes, counter}))}>
                    <img src={plus} alt="plus" />
                    Добавить
                </button>
            </div>
        </div>
    )
}

export default PizzasListItem;