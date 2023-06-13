import './App.scss';
<<<<<<< HEAD
import { Routes, Route, Navigate } from 'react-router-dom';
=======
import { Pagination } from './components/Pagination/Pagination';
>>>>>>> 97bf17c (visual part done)
import { HomePage } from './modules/HomePage';
import { PhonesPage } from './modules/PhonePage/PhonePage';
import { TabletsPage } from './modules/TabletsPage/TabletsPage';
import { AccessoriesPage } from './modules/AccessoriesPage/AccessoriesPage';
import { ShoppingCartPage } from './modules/ShoppingCartPage/ShoppingCartPage';
import { FavoritesPage } from './modules/FavoritesPage/FavoritesPage';
import { PageNotFound } from './modules/PageNotFound/PageNotFound';

const App = () => (
  <div className="App">
<<<<<<< HEAD
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
=======
    <HomePage />

    <Pagination />
>>>>>>> 97bf17c (visual part done)
  </div>
);

export default App;
