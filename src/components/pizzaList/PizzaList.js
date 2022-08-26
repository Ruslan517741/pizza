import './pizzaList.scss';
import pizzaChiz from "../../resources/img/pizzaChiz.png";
import cheesy from "../../resources/img/cheesy.png";
import chick from "../../resources/img/chick.png";
import shrimps from "../../resources/img/shrimps.png";
import plus from "../../resources/img/plus.png";


const PizzaList = () => {
    return (
        <div className="pizzaList">
            <div className="pizzaList__typeFilter">Все пиццы</div>
            <div className="pizzaList__items">
                <div className="pizzaList__item">
                    <img src={pizzaChiz} alt="pizza" className="pizzaList__item-img" />
                    <div className="pizzaList__item-title">Чизбургер-пицца</div>
                    <div className="pizzaList__item-selectMenu">
                        <div className="pizzaType">
                            <button className="pizzaType__item pizzaType__item-active">тонкое</button>
                            <button className="pizzaType__item">традиционное</button>
                        </div>
                        <div className="pizzaSize">
                            <button className="pizzaSize__item pizzaSize__item-active">26 см.</button>
                            <button className="pizzaSize__item">30 см.</button>
                            <button className="pizzaSize__item">40 см.</button>
                        </div>
                    </div>
                    <div className="pizzaList__item-wrapper">
                        <div className="pizzaList__item-price">от 395грн</div>
                        <button className="pizzaList__item-addButton">
                            <img src={plus} alt="plus" />
                            Добавить
                        </button>
                    </div>
                </div>
                <div className="pizzaList__item">
                    <img src={cheesy} alt="pizza" className="pizzaList__item-img" />
                    <div className="pizzaList__item-title">Сырная</div>
                    <div className="pizzaList__item-selectMenu">
                        <div className="pizzaType">
                            <button className="pizzaType__item pizzaType__item-active">тонкое</button>
                            <button className="pizzaType__item">традиционное</button>
                        </div>
                        <div className="pizzaSize">
                            <button className="pizzaSize__item pizzaSize__item-active">26 см.</button>
                            <button className="pizzaSize__item">30 см.</button>
                            <button className="pizzaSize__item">40 см.</button>
                        </div>
                    </div>
                    <div className="pizzaList__item-wrapper">
                        <div className="pizzaList__item-price">от 290грн</div>
                        <button className="pizzaList__item-addButton">
                            <img src={plus} alt="plus" />
                            Добавить
                        </button>
                    </div>
                </div>
                <div className="pizzaList__item">
                    <img src={chick} alt="pizza" className="pizzaList__item-img" />
                    <div className="pizzaList__item-title">Сырный ципленок</div>
                    <div className="pizzaList__item-selectMenu">
                        <div className="pizzaType">
                            <button className="pizzaType__item pizzaType__item-active">тонкое</button>
                            <button className="pizzaType__item">традиционное</button>
                        </div>
                        <div className="pizzaSize">
                            <button className="pizzaSize__item pizzaSize__item-active">26 см.</button>
                            <button className="pizzaSize__item">30 см.</button>
                            <button className="pizzaSize__item">40 см.</button>
                        </div>
                    </div>
                    <div className="pizzaList__item-wrapper">
                        <div className="pizzaList__item-price">от 385грн</div>
                        <button className="pizzaList__item-addButton">
                            <img src={plus} alt="plus" />
                            Добавить
                        </button>
                    </div>
                </div>
                <div className="pizzaList__item">
                    <img src={shrimps} alt="pizza" className="pizzaList__item-img" />
                    <div className="pizzaList__item-title">Креветки по-азиатски</div>
                    <div className="pizzaList__item-selectMenu">
                        <div className="pizzaType">
                            <button className="pizzaType__item pizzaType__item-active">тонкое</button>
                            <button className="pizzaType__item">традиционное</button>
                        </div>
                        <div className="pizzaSize">
                            <button className="pizzaSize__item pizzaSize__item-active">26 см.</button>
                            <button className="pizzaSize__item">30 см.</button>
                            <button className="pizzaSize__item">40 см.</button>
                        </div>
                    </div>
                    <div className="pizzaList__item-wrapper">
                        <div className="pizzaList__item-price">от 450грн</div>
                        <button className="pizzaList__item-addButton">
                            <img src={plus} alt="plus" />
                            Добавить
                        </button>
                    </div>
                </div>
                <div className="pizzaList__item">
                    <img src={pizzaChiz} alt="pizza" className="pizzaList__item-img" />
                    <div className="pizzaList__item-title">Чизбургер-пицца</div>
                    <div className="pizzaList__item-selectMenu">
                        <div className="pizzaType">
                            <button className="pizzaType__item pizzaType__item-active">тонкое</button>
                            <button className="pizzaType__item">традиционное</button>
                        </div>
                        <div className="pizzaSize">
                            <button className="pizzaSize__item pizzaSize__item-active">26 см.</button>
                            <button className="pizzaSize__item">30 см.</button>
                            <button className="pizzaSize__item">40 см.</button>
                        </div>
                    </div>
                    <div className="pizzaList__item-wrapper">
                        <div className="pizzaList__item-price">от 395грн</div>
                        <button className="pizzaList__item-addButton">
                            <img src={plus} alt="plus" />
                            Добавить
                        </button>
                    </div>
                </div>
                <div className="pizzaList__item">
                    <img src={cheesy} alt="pizza" className="pizzaList__item-img" />
                    <div className="pizzaList__item-title">Сырная</div>
                    <div className="pizzaList__item-selectMenu">
                        <div className="pizzaType">
                            <button className="pizzaType__item pizzaType__item-active">тонкое</button>
                            <button className="pizzaType__item">традиционное</button>
                        </div>
                        <div className="pizzaSize">
                            <button className="pizzaSize__item pizzaSize__item-active">26 см.</button>
                            <button className="pizzaSize__item">30 см.</button>
                            <button className="pizzaSize__item">40 см.</button>
                        </div>
                    </div>
                    <div className="pizzaList__item-wrapper">
                        <div className="pizzaList__item-price">от 290грн</div>
                        <button className="pizzaList__item-addButton">
                            <img src={plus} alt="plus" />
                            Добавить
                        </button>
                    </div>
                </div>
                <div className="pizzaList__item">
                    <img src={chick} alt="pizza" className="pizzaList__item-img" />
                    <div className="pizzaList__item-title">Сырный ципленок</div>
                    <div className="pizzaList__item-selectMenu">
                        <div className="pizzaType">
                            <button className="pizzaType__item pizzaType__item-active">тонкое</button>
                            <button className="pizzaType__item">традиционное</button>
                        </div>
                        <div className="pizzaSize">
                            <button className="pizzaSize__item pizzaSize__item-active">26 см.</button>
                            <button className="pizzaSize__item">30 см.</button>
                            <button className="pizzaSize__item">40 см.</button>
                        </div>
                    </div>
                    <div className="pizzaList__item-wrapper">
                        <div className="pizzaList__item-price">от 385грн</div>
                        <button className="pizzaList__item-addButton">
                            <img src={plus} alt="plus" />
                            Добавить
                        </button>
                    </div>
                </div>
                <div className="pizzaList__item">
                    <img src={shrimps} alt="pizza" className="pizzaList__item-img" />
                    <div className="pizzaList__item-title">Креветки по-азиатски</div>
                    <div className="pizzaList__item-selectMenu">
                        <div className="pizzaType">
                            <button className="pizzaType__item pizzaType__item-active">тонкое</button>
                            <button className="pizzaType__item">традиционное</button>
                        </div>
                        <div className="pizzaSize">
                            <button className="pizzaSize__item pizzaSize__item-active">26 см.</button>
                            <button className="pizzaSize__item">30 см.</button>
                            <button className="pizzaSize__item">40 см.</button>
                        </div>
                    </div>
                    <div className="pizzaList__item-wrapper">
                        <div className="pizzaList__item-price">от 450грн</div>
                        <button className="pizzaList__item-addButton">
                            <img src={plus} alt="plus" />
                            Добавить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PizzaList;