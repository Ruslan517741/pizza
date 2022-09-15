import { useDispatch, useSelector } from 'react-redux';

import { changeActiveType, changeActiveSize } from '../pizzasList/pizzasSlice';
import { addPizza } from '../basket/basketSlice';

const PizzasListItem = ({imageUrl, name, types, sizes, price, activeType = types[0], activeSize = sizes[0], id}) => {
    
    const dispatch = useDispatch();
    
    const pizzasTypes = ['тонкое', 'традиционное'];
    const pizzasSizes = [26, 30, 40];

    const countPrice = () => {
        let increaserByType = activeType === 0 ? 1 : 1.5;
        let increaserBySize;
        switch (activeSize) {
            case 26:
                increaserBySize = 1;
                break;
            case 30:
                increaserBySize = 1.5;
                break;
            case 40:
                increaserBySize = 2;
                break;
        }
        return price*increaserByType*increaserBySize;
    }

    const renderPizzasTypes = (arr) => {
        return arr.map((item, i) => {
            return (
                <button 
                    key={i}
                    className={`pizzasType__item ${activeType === i ? 'pizzasType__item-active' : null}`} 
                    disabled={!types.some(type => type === i)}
                    onClick={() => dispatch(changeActiveType({id, activeType: i}))}>
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
                    onClick={() => dispatch(changeActiveSize({id, activeSize: item}))}>
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
                </div>
                <div className="pizzasSize">
                    {sizeElements}
                </div>
            </div>
            <div className="pizzasList__item-wrapper">
                <div className="pizzasList__item-price">{countPrice()}грн</div>
                <button className="pizzasList__item-addButton" onClick={() => dispatch(addPizza({imageUrl, name, activeType, activeSize, price, id: `${id}${activeType}${activeSize}`, pizzasTypes, counter: 1}))}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#EB5A1E"/>
                </svg>
                    Добавить
                </button>
            </div>
        </div>
    )
}

export default PizzasListItem;