import AppHeader from '../appHeader/AppHeader';
import MainPage from '../mainPage/MainPage';
import Basket from '../basket/Basket';



const App = () => {
  return (
    <div className="app">
      <div className="container">
        <AppHeader/>
        {/* <MainPage/> */}
        <Basket/>
      </div>
      
    </div>
  );
}

export default App;
