import './appHeader.scss';
import logo from '../../resources/img/logo.png'
import basket from '../../resources/img/basket.png'


const AppHeader = () => {
    return (
        <header className='app__header'>
            <div className='logo'>
                <img className='logo__img' src={logo} alt="logo" />
                <div className="logo__text">
                    <div className="logo__title">REACT PIZZA</div>
                    <div className="logo__motto">самая вкусная пицца во вселенной</div>
                </div>
            </div>
            <a href="#" className="header__button">500 | 3 <img src={basket} alt="basket" /></a>
            
        </header>
    )
}

export default AppHeader;