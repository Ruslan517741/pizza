import './pizzaList.scss';
import pizzaChiz from "../../resources/img/pizzaChiz.png"

const PizzaList = () => {
    return (
        <div className="pizzaList">
            <div className="pizzaList__typeFilter">Все пиццы</div>
            <div className="pizzaList__item">
                <img src={pizzaChiz} alt="pizza" className="pizzaList__item-img" />
                <div className="pizzaList__item-title"></div>
                <div className="pizzaList__item-selectMenu">


                </div>
                <div className="pizzaList__item-wrapper">
                    <div className="pizzaList__item-price"></div>
                    <button className="pizzaList__item-addButton"></button>
                </div>
            </div>
        </div>
    )
}

export default PizzaList;