import AppHeader from '../appHeader/AppHeader';
import MainPage from '../mainPage/MainPage';
import Basket from '../basket/Basket';
import EmptyBasket from '../emptyBasket/EmptyBasket';



const App = () => {
  return (
    <div className="app">
      <div className="container">
        <AppHeader/>
        <MainPage/>
        {/* <Basket/> */}
        {/* <EmptyBasket/> */}
      </div>
      
    </div>
  );
}

export default App;
