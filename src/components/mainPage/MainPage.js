import "./mainPage.scss";

const MainPage = () => {
    return (
        <div className="mainPage">
            <div className="pizzaFilters">
                <div className="pizzaFilters__buttons">
                    <button className="pizzaFilters__button all active">Все</button>
                    <button className="pizzaFilters__button meat">Мясные</button>
                    <button className="pizzaFilters__button vegetarian">Вегетарианские</button>
                    <button className="pizzaFilters__button grill">Гриль</button>
                    <button className="pizzaFilters__button spicy">Острые</button>
                    <button className="pizzaFilters__button closed">Закрытые</button>
                </div>
                <div className="pizzaFilters__panel">
                    <div className="pizzaFilters__panel-text">Сортировка по:</div>
                    <select id="select" className="pizzaFilters__panel-select">
                        <option value="popularity" selected>популярности</option>
                        <option value="price">цене</option>
                        <option value="alphabet">алфавиту</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default MainPage;