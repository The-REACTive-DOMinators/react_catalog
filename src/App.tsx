/* eslint-disable max-len */
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './modules/HomePage';
import { PhonesPage } from './modules/HomePage/PhonePage/PhonePage';
import { TabletsPage } from './modules/HomePage/TabletsPage/TabletsPage';
import { AccessoriesPage } from './modules/HomePage/AccessoriesPage/AccessoriesPage';
import { ShoppingCartPage } from './modules/HomePage/ShoppingCartPage/ShoppingCartPage';
import { FavoritesPage } from './modules/HomePage/FavoritesPage/FavoritesPage';
import { PageNotFound } from './modules/HomePage/PageNotFound/PageNotFound';

const App = () => (
  <div className="App">
    <h1>React Phone Catalog</h1>

    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="/home" element={<Navigate to="/" />} />
      </Route>
      <Route path="/phones" element={<PhonesPage />} />
      <Route path="/tablets" element={<TabletsPage />} />
      <Route path="/accessories" element={<AccessoriesPage />} />
      <Route path="/cart" element={<ShoppingCartPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </div>
);

export default App;
