import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { BurgerMenu } from './components/BurgerMenu';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BurgerMenu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
