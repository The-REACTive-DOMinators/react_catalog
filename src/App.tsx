import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './modules/HomePage';
import { PhonesPage } from './modules/PhonePage/PhonePage';
import { TabletsPage } from './modules/TabletsPage/TabletsPage';
import { AccessoriesPage } from './modules/AccessoriesPage/AccessoriesPage';
import { ShoppingCartPage } from './modules/ShoppingCartPage/ShoppingCartPage';
import { FavoritesPage } from './modules/FavoritesPage/FavoritesPage';
import { PageNotFound } from './modules/PageNotFound/PageNotFound';
import { Card } from './components/Card';

const phone = {
  id: '1',
  category: 'phones',
  phoneId: 'apple-iphone-7-32gb-black',
  itemId: 'apple-iphone-7-32gb-black',
  name: 'Apple iPhone 7 32GB Black',
  fullPrice: 400,
  price: 375,
  screen: '4.7 IPS',
  capacity: '32GB',
  color: 'black',
  ram: '2GB',
  year: 2016,
  image: 'img/phones/apple-iphone-7/black/00.jpg',
};

const App = () => (
  <div className="App">
    <Card phone={phone} />
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
