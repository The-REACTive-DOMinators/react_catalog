import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { HomePage } from './components/HomePage/HomePage';
import { ProductList } from './components/ProductList/ProductList';
import { CartPage } from './components/CartPage/CartPage';
import { FavoritesPage } from './components/FavoritesPage/FavoritesPage';

const App = () => (
  <div className="App">
    <h1>React Phone Catalog</h1>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/phones" element={<ProductList />} />
      <Route path="/tablets" element={<ProductList />} />
      <Route path="/accessories" element={<ProductList />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </div>
);

export default App;
