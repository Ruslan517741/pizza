import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { fetchPizzas } from './pizzasSlice';
import PizzasListItem from '../pizzasListItem/PizzasListItem';
import Spinner from '../spinner/Spinner';

import './pizzasList.scss';

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
        return arr.map(({...props}, i) => {
            return (
                <PizzasListItem key={i} {...props}/> 
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