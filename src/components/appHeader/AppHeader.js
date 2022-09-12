import { Link, useLocation } from 'react-router-dom';

import logo from '../../resources/img/logo.png';
import basketButton from '../../resources/img/basketButton.svg';

import './appHeader.scss';

const AppHeader = () => {
    const location = useLocation();

    const renderBasketLinkButton = () => {
        return (
            <Link to="/basket" className="header__button">
                <div className='price'>500 грн</div>
                <div className='separator'></div>
                <img src={basketButton} alt="basket"/>
                <div className='goods'>3</div>
            </Link>
        )
    }

    return (
        <header className='appHeader'>
            <Link to="/" className='logo'>
                <img className='logo__img' src={logo} alt="logo" />
                <div className="logo__text">
                    <div className="logo__title">REACT PIZZA</div>
                    <div className="logo__motto">самая вкусная пицца во вселенной</div>
                </div>
            </Link>
            {location.pathname !== '/basket' ? renderBasketLinkButton() : null}            
        </header>
    )
}

export default AppHeader;