import { useHttp } from '../../hooks/http.hooks';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { fetchPizzas } from './pizzasSlice';
import Spinner from '../spinner/Spinner';

import './pizzasList.scss';
import plus from "../../resources/img/plus.png";


const PizzasList = () => {
    const filteredPizzasSelector = createSelector(
        (state) => state.pizzas.activeFilter,
        (state) => state.pizzas.pizzas,
        (filter, pizzas) => {
            if (filter === 'all') {
                return pizzas;
            } else {
                return pizzas.filter(item => item.category === filter);
            }
        }
    )


    const pizzas = useSelector(state => state.pizzas.pizzas);
    const pizzasLoadingStatus = useSelector(state => state.pizzas.pizzasLoadingStatus);
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(fetchPizzas());
        
    }, []);
    console.log(pizzas);

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
                            <button className="pizzasList__item-addButton">
                                <img src={plus} alt="plus" />
                                Добавить
                            </button>
                        </div>
                </div>
            )
            
        })
    }
    
    const elements = renderPizzasList(pizzas);
    return (
        <div className="pizzasList">
            <div className="pizzasList__typeFilter">Все пиццы</div>
            <div className="pizzasList__items">
                {elements}
                {/* <div className="pizzasList__item">
                    <img src={pizzaChiz} alt="pizza" className="pizzasList__item-img" />
                    <div className="pizzasList__item-title">Чизбургер-пицца</div>
                    <div className="pizzasList__item-selectMenu">
                        <div className="pizzasType">
                            <button className="pizzasType__item pizzaType__item-active">тонкое</button>
                            <button className="pizzasType__item">традиционное</button>
                        </div>
                        <div className="pizzasSize">
                            <button className="pizzasSize__item pizzasSize__item-active">26 см.</button>
                            <button className="pizzasSize__item">30 см.</button>
                            <button className="pizzasSize__item">40 см.</button>
                        </div>
                    </div>
                    <div className="pizzasList__item-wrapper">
                        <div className="pizzasList__item-price">от 395грн</div>
                        <button className="pizzasList__item-addButton">
                            <img src={plus} alt="plus" />
                            Добавить
                        </button>
                    </div>
                </div>
                <div className="pizzasList__item">
                    <img src={cheesy} alt="pizza" className="pizzasList__item-img" />
                    <div className="pizzasList__item-title">Сырная</div>
                    <div className="pizzasList__item-selectMenu">
                        <div className="pizzaType">
                            <button className="pizzasType__item pizzasType__item-active">тонкое</button>
                            <button className="pizzasType__item">традиционное</button>
                        </div>
                        <div className="pizzasSize">
                            <button className="pizzasSize__item pizzasSize__item-active">26 см.</button>
                            <button className="pizzasSize__item">30 см.</button>
                            <button className="pizzasSize__item">40 см.</button>
                        </div>
                    </div>
                    <div className="pizzasList__item-wrapper">
                        <div className="pizzasList__item-price">от 290грн</div>
                        <button className="pizzasList__item-addButton">
                            <img src={plus} alt="plus" />
                            Добавить
                        </button>
                    </div>
                </div>
                <div className="pizzasList__item">
                    <img src={chick} alt="pizza" className="pizzasList__item-img" />
                    <div className="pizzasList__item-title">Сырный ципленок</div>
                    <div className="pizzasList__item-selectMenu">
                        <div className="pizzasType">
                            <button className="pizzasType__item pizzasType__item-active">тонкое</button>
                            <button className="pizzasType__item">традиционное</button>
                        </div>
                        <div className="pizzasSize">
                            <button className="pizzasSize__item pizzasSize__item-active">26 см.</button>
                            <button className="pizzasSize__item">30 см.</button>
                            <button className="pizzasSize__item">40 см.</button>
                        </div>
                    </div>
                    <div className="pizzasList__item-wrapper">
                        <div className="pizzasList__item-price">от 385грн</div>
                        <button className="pizzasList__item-addButton">
                            <img src={plus} alt="plus" />
                            Добавить
                        </button>
                    </div>
                </div>
                <div className="pizzasList__item">
                    <img src={shrimps} alt="pizza" className="pizzasList__item-img" />
                    <div className="pizzasList__item-title">Креветки по-азиатски</div>
                    <div className="pizzasList__item-selectMenu">
                        <div className="pizzasType">
                            <button className="pizzasType__item pizzasType__item-active">тонкое</button>
                            <button className="pizzasType__item">традиционное</button>
                        </div>
                        <div className="pizzasSize">
                            <button className="pizzasSize__item pizzasSize__item-active">26 см.</button>
                            <button className="pizzasSize__item">30 см.</button>
                            <button className="pizzasSize__item">40 см.</button>
                        </div>
                    </div>
                    <div className="pizzasList__item-wrapper">
                        <div className="pizzasList__item-price">от 450грн</div>
                        <button className="pizzasList__item-addButton">
                            <img src={plus} alt="plus" />
                            Добавить
                        </button>
                    </div>
                </div>
                <div className="pizzasList__item">
                    <img src={pizzaChiz} alt="pizza" className="pizzasList__item-img" />
                    <div className="pizzasList__item-title">Чизбургер-пицца</div>
                    <div className="pizzasList__item-selectMenu">
                        <div className="pizzasType">
                            <button className="pizzasType__item pizzasType__item-active">тонкое</button>
                            <button className="pizzasType__item">традиционное</button>
                        </div>
                        <div className="pizzasSize">
                            <button className="pizzasSize__item pizzasSize__item-active">26 см.</button>
                            <button className="pizzasSize__item">30 см.</button>
                            <button className="pizzasSize__item">40 см.</button>
                        </div>
                    </div>
                    <div className="pizzasList__item-wrapper">
                        <div className="pizzasList__item-price">от 395грн</div>
                        <button className="pizzasList__item-addButton">
                            <img src={plus} alt="plus" />
                            Добавить
                        </button>
                    </div>
                </div>
                <div className="pizzasList__item">
                    <img src={cheesy} alt="pizza" className="pizzasList__item-img" />
                    <div className="pizzasList__item-title">Сырная</div>
                    <div className="pizzasList__item-selectMenu">
                        <div className="pizzasType">
                            <button className="pizzasType__item pizzasType__item-active">тонкое</button>
                            <button className="pizzasType__item">традиционное</button>
                        </div>
                        <div className="pizzasSize">
                            <button className="pizzasSize__item pizzasSize__item-active">26 см.</button>
                            <button className="pizzasSize__item">30 см.</button>
                            <button className="pizzasSize__item">40 см.</button>
                        </div>
                    </div>
                    <div className="pizzasList__item-wrapper">
                        <div className="pizzasList__item-price">от 290грн</div>
                        <button className="pizzasList__item-addButton">
                            <img src={plus} alt="plus" />
                            Добавить
                        </button>
                    </div>
                </div>
                <div className="pizzasList__item">
                    <img src={chick} alt="pizza" className="pizzasList__item-img" />
                    <div className="pizzasList__item-title">Сырный ципленок</div>
                    <div className="pizzasList__item-selectMenu">
                        <div className="pizzasType">
                            <button className="pizzasType__item pizzasType__item-active">тонкое</button>
                            <button className="pizzasType__item">традиционное</button>
                        </div>
                        <div className="pizzasSize">
                            <button className="pizzasSize__item pizzasSize__item-active">26 см.</button>
                            <button className="pizzasSize__item">30 см.</button>
                            <button className="pizzasSize__item">40 см.</button>
                        </div>
                    </div>
                    <div className="pizzasList__item-wrapper">
                        <div className="pizzasList__item-price">от 385грн</div>
                        <button className="pizzasList__item-addButton">
                            <img src={plus} alt="plus" />
                            Добавить
                        </button>
                    </div>
                </div>
                <div className="pizzasList__item">
                    <img src={shrimps} alt="pizza" className="pizzasList__item-img" />
                    <div className="pizzasList__item-title">Креветки по-азиатски</div>
                    <div className="pizzasList__item-selectMenu">
                        <div className="pizzasType">
                            <button className="pizzasType__item pizzasType__item-active">тонкое</button>
                            <button className="pizzasType__item">традиционное</button>
                        </div>
                        <div className="pizzasSize">
                            <button className="pizzasSize__item pizzasSize__item-active">26 см.</button>
                            <button className="pizzasSize__item">30 см.</button>
                            <button className="pizzasSize__item">40 см.</button>
                        </div>
                    </div>
                    <div className="pizzasList__item-wrapper">
                        <div className="pizzasList__item-price">от 450грн</div>
                        <button className="pizzasList__item-addButton">
                            <img src={plus} alt="plus" />
                            Добавить
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default PizzasList;