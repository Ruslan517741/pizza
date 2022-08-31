import { useState } from "react";
import { useDispatch } from 'react-redux';
import { activeFilterChanged } from '../pizzasList/pizzasSlice';
import "./filter.scss";

const Filter = () => {
    const [modalDisplay, setModalDisplay] = useState('none');
    const [activeButtonIndex, setActiveButtonIndex] = useState('all');
    const dispatch = useDispatch();

    const toggleSortModalPanel = () => {
        setModalDisplay(modalDisplay === 'none' ? 'block' : 'none');
        console.log(modalDisplay);
    }

    const changeFilter = (index) => {
        dispatch(activeFilterChanged(index));
        setActiveButtonIndex(index);
    }

    const renderFiltersButton = (arr) => {
        return arr.map((item, i) => {
            if (i === 0) {
                return (
                    <button key={i} className={`pizzaFilters__button ${activeButtonIndex === 'all' ? 'activeType' : null}`} onClick={() => changeFilter('all')}>{item}</button>
                )
            } else {
                return (
                    <button key={i} className={`pizzaFilters__button ${activeButtonIndex === (i - 1) ? 'activeType' : null}`} onClick={() => changeFilter((i - 1))}>{item}</button>
                )
            }
        })
    }
    const elements = renderFiltersButton(['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']);
    
    return (
        <div className="filter">
            <div className="pizzaFilters">
                <div className="pizzaFilters__buttons">
                    {elements}
                    {/* <button className={`pizzaFilters__button ${activeButtonIndex === 'all' ? 'activeType' : null}`} onClick={() => changeFilter('all')}>Все</button>
                    <button className={`pizzaFilters__button ${activeButtonIndex === 0 ? 'activeType' : null}`} onClick={() => changeFilter(0)}>Мясные</button>
                    <button className={`pizzaFilters__button ${activeButtonIndex === 1 ? 'activeType' : null}`} onClick={() => changeFilter(1)}>Вегетарианские</button>
                    <button className={`pizzaFilters__button ${activeButtonIndex === 2 ? 'activeType' : null}`} onClick={() => changeFilter(2)}>Гриль</button>
                    <button className={`pizzaFilters__button ${activeButtonIndex === 3 ? 'activeType' : null}`} onClick={() => changeFilter(3)}>Острые</button>
                    <button className={`pizzaFilters__button ${activeButtonIndex === 4 ? 'activeType' : null}`} onClick={() => changeFilter(4)}>Закрытые</button> */}
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