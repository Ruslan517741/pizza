import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { fetchPizzas } from './pizzasSlice';
import { addPizza } from '../basket/basketSlice';
import Spinner from '../spinner/Spinner';

import './pizzasList.scss';
import plus from "../../resources/img/plus.png";


const PizzasList = () => {
    /* const filteredPizzasSelector = createSelector(
        (state) => state.pizzas.activeFilter,
        (state) => state.pizzas.pizzas,
        (filter, sortFilter pizzas) => {
            if (filter === 'all') {
                return pizzas;
            } else {
                return pizzas.filter(item => item.category === filter);
            }
        }
    ); */

    const filteredPizzasSelector = createSelector(
        (state) => state.pizzas.activeFilter,
        (state) => state.pizzas.activeSortFilter,
        (state) => state.pizzas.pizzas,
        (filter, sortFilter, pizzas) => {
            if (filter === 'all') {
                switch (sortFilter) {
                    case 'popularity':
                        return pizzas.filter(item => item.category !== filter).sort((a, b) => b.rating - a.rating);
                    case 'price':
                        return pizzas.filter(item => item.category !== filter).sort((a, b) => b.price - a.price);
                    case 'alphabet':
                        return pizzas.filter(item => item.category !== filter).sort((a, b) => {
                            if (a.name < b.name) return -1
                            if (a.name > b.name) return 1
                            return 0;
                        });
                    default: {}
                }
            } else {
                switch (sortFilter) {
                    case 'popularity':
                        return pizzas.filter(item => item.category === filter).sort((a, b) => b.rating - a.rating);
                    case 'price':
                        return pizzas.filter(item => item.category === filter).sort((a, b) => b.price - a.price);
                    case 'alphabet':
                        return pizzas.filter(item => item.category === filter).sort((a, b) => {
                            if (a.name < b.name) return -1
                            if (a.name > b.name) return 1
                            return 0;
                        });
                    default: {}
                }
            }
        }
    );

    const filteredPizzas = useSelector(filteredPizzasSelector)
    const pizzasLoadingStatus = useSelector(state => state.pizzas.pizzasLoadingStatus);
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(fetchPizzas());
    }, []);   

    if (pizzasLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (pizzasLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderPizzasList = (arr) => { 
        return arr.map(item => {
            return (
                <div key={item.id} className="pizzasList__item">
                        <img src={item.imageUrl} alt="pizza" className="pizzasList__item-img" />
                        <div className="pizzasList__item-title">{item.name}</div>
                        <div className="pizzasList__item-selectMenu">
                            <div className="pizzasType">
                                <button className="pizzasType__item pizzasType__item-active" disabled={!item.types.some(type => type === 0)}>тонкое</button>
                                <button className="pizzasType__item" disabled={!item.types.some(type => type === 1)}>традиционное</button>
                            </div>
                            <div className="pizzasSize">
                                <button className="pizzasSize__item pizzasSize__item-active" disabled={!item.sizes.some(size => size === 26)}>26 см.</button>
                                <button className="pizzasSize__item" disabled={!item.sizes.some(size => size === 30)}>30 см.</button>
                                <button className="pizzasSize__item" disabled={!item.sizes.some(size => size === 40)}>40 см.</button>
                            </div>
                        </div>
                        <div className="pizzasList__item-wrapper">
                            <div className="pizzasList__item-price">от {item.price}грн</div>
                            <button className="pizzasList__item-addButton" onClick={() => {console.log(item)}}>
                                <img src={plus} alt="plus" />
                                Добавить
                            </button>
                        </div>
                </div>
            )
            
        })
    }
    
    const elements = renderPizzasList(filteredPizzas);
    return (
        <div className="pizzasList">
            <div className="pizzasList__typeFilter">Все пиццы</div>
            <div className="pizzasList__items">
                {elements}
            </div>
        </div>
    )
}

export default PizzasList;