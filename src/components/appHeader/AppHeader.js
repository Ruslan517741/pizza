import './appHeader.scss';
import logo from '../../resources/img/logo.png'
import basket from '../../resources/img/basket.svg'


const AppHeader = () => {
    return (
        <header className='appHeader'>
            <div className='logo'>
                <img className='logo__img' src={logo} alt="logo" />
                <div className="logo__text">
                    <div className="logo__title">REACT PIZZA</div>
                    <div className="logo__motto">самая вкусная пицца во вселенной</div>
                </div>
            </div>
            <a href="#" className="header__button">
                <div className='price'>500 грн</div>
                <div className='separator'></div>
                <img src={basket} alt="basket"/>
                <div className='goods'>3</div>
            </a>
        </header>
    )
}

export default AppHeader;