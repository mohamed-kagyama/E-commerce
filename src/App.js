import './App.css';
import {Routes,Route} from 'react-router-dom';

import { HomePage } from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Routes>
        <Route  exact path="/" element={<HomePage />} />
        <Route  exact path="/shop" element={<ShopPage/>} />
      </Routes>
    </div>
    
    
  );
}

export default App;
