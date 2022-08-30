import { useState } from "react";
import "./filter.scss";

const Filter = () => {
    const [modalDisplay, setModalDisplay] = useState('none')

    const toggleSortModalPanel = () => {
        setModalDisplay(modalDisplay === 'none' ? 'block' : 'none');
        console.log(modalDisplay);
    }

    return (
        <div className="filter">
            <div className="pizzaFilters">
                <div className="pizzaFilters__buttons">
                    <button className="pizzaFilters__button all activeType">Все</button>
                    <button className="pizzaFilters__button meat">Мясные</button>
                    <button className="pizzaFilters__button vegetarian">Вегетарианские</button>
                    <button className="pizzaFilters__button grill">Гриль</button>
                    <button className="pizzaFilters__button spicy">Острые</button>
                    <button className="pizzaFilters__button closed">Закрытые</button>
                </div>
                <div className="pizzaFilters__panel">
                    <div className="pizzaFilters__panel-text">Сортировка по:</div>
                    <div className="pizzaFilters__panel-select" onClick={() => toggleSortModalPanel()}>популярности</div>
                    <div className="pizzaFilters__panel-modal" style={{display: modalDisplay}}>
                        <button className="pizzaFilters__panel-option activeFilter" value="popularity">популярности</button>
                        <button className="pizzaFilters__panel-option" value="price">цене</button>
                        <button className="pizzaFilters__panel-option" value="alphabet">алфавиту</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter;