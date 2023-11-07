import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';
import MainPage from '../pages/MainPage';
import Basket from '../basket/Basket';
import Page404 from '../pages/404';




const App = () => {
  return (
    <Router>
        <div className="app">
            <div className="container">
                    <AppHeader/>
                    <main>
                        <Routes>
                            <Route path='/' element={<MainPage/>}/>
                            <Route path='/pizza' element={<MainPage/>}/>
                            <Route path='/Basket' element={<Basket/>}/> 
                            <Route path="*" element={<Page404/>}/>                      
                        </Routes>
                    </main>
            </div>
        </div>
    </Router>
    
  );
}

export default App;
