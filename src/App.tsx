import './App.scss';
import { Routes, Route } from 'react-router-dom';

import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { HomePage } from './components/HomePage/HomePage';
import { CartPage } from './components/CartPage/CartPage';
import { FavoritesPage } from './components/FavoritesPage/FavoritesPage';
import { PhonesPage } from './components/PhonesPage/PhonesPage';
import { TabletsPage } from './components/TabletsPage/TabletsPage';
import { AccessoriesPage } from './components/AccessoriesPage/AccessoriesPage';

const App = () => (
  <div className="App">
    <h1>React Phone Catalog</h1>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/phones" element={<PhonesPage />} />
      <Route path="/tablets" element={<TabletsPage />} />
      <Route path="/accessories" element={<AccessoriesPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </div>
);

export default App;
