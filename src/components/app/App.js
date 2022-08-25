import AppHeader from '../appHeader/AppHeader';
import Filter from '../filter/Filter';
import PizzaList from '../pizzaList/PizzaList';


const App = () => {
  return (
    <div className="app">
      <div className="container">
        <AppHeader/>
        <Filter/>
        <PizzaList/>
      </div>
      
    </div>
  );
}

export default App;
