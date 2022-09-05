import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addPizza } from '../basket/basketSlice';
import plus from "../../resources/img/plus.png";

import './pizzasListItem.scss';

const PizzasListItem = ({imageUrl, name, types, sizes, price}) => {
    const [activeType, setActiveType] = useState(types[0]);
    const [activeSize, setActiveSize] = useState(sizes[0]);
    const dispatch = useDispatch();

    const pizzasTypes = ['тонкое', 'традиционное'];
    const pizzasSizes = [26, 30, 40];

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
    
    const typeElements = renderPizzasTypes(pizzasTypes);
    const sizeElements = renderPizzasSizes(pizzasSizes);
    return (
        <div className="pizzasList__item">
            <img src={imageUrl} alt="pizza" className="pizzasList__item-img" />
            <div className="pizzasList__item-title">{name}</div>
            <div className="pizzasList__item-selectMenu">
                <div className="pizzasType">
                    {typeElements}
                    {/* <button 
                        className={`pizzasType__item ${activeType === 0 ? 'pizzasType__item-active' : null}`} 
                        disabled={!types.some(type => type === 0)}
                        onClick={() => setActiveType(0)}>
                            тонкое
                    </button>
                    <button 
                        className={`pizzasType__item ${activeType === 1 ? 'pizzasType__item-active' : null}`} 
                        disabled={!types.some(type => type === 1)}
                        onClick={() => setActiveType(1)}>
                            традиционное
                    </button> */}
                </div>
                <div className="pizzasSize">
                    {sizeElements}
                    {/* <button 
                        className={`pizzasSize__item ${activeSize === 26 ? 'pizzasSize__item-active' : null}`} 
                        disabled={!sizes.some(size => size === 26)}
                        onClick={() => setActiveSize(26)}>
                            26 см.
                    </button>
                    <button 
                        className={`pizzasSize__item ${activeSize === 30 ? 'pizzasSize__item-active' : null}`}  
                        disabled={!sizes.some(size => size === 30)}
                        onClick={() => setActiveSize(30)}>
                            30 см.
                    </button>
                    <button 
                        className={`pizzasSize__item ${activeSize === 40 ? 'pizzasSize__item-active' : null}`}  
                        disabled={!sizes.some(size => size === 40)}
                        onClick={() => setActiveSize(40)}>
                            40 см.
                    </button> */}
                </div>
            </div>
            <div className="pizzasList__item-wrapper">
                <div className="pizzasList__item-price">от {price}грн</div>
                <button className="pizzasList__item-addButton" onClick={() => {dispatch(addPizza({name, activeType, activeSize, price}))}}>
                    <img src={plus} alt="plus" />
                    Добавить
                </button>
            </div>
        </div>
    )
}

export default PizzasListItem;