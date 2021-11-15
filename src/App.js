import './App.css';
import { HomePage } from './pages/home/homepage.component';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route  exact path="/" element={<HomePage />} />
      </Routes>
    </div>
    
    
  );
}

export default App;
