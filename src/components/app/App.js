import AppHeader from '../appHeader/AppHeader';
import Filter from '../filter/Filter';


const App = () => {
  return (
    <div className="app">
      <div className="container">
        <AppHeader/>
        <Filter/>
      </div>
      
    </div>
  );
}

export default App;
