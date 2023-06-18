/* eslint-disable max-len */
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './modules/HomePage';
import { PhonesPage } from './modules/PhonePage/PhonePage';
import { TabletsPage } from './modules/TabletsPage/TabletsPage';
import { AccessoriesPage } from './modules/AccessoriesPage/AccessoriesPage';
import { ShoppingCartPage } from './modules/ShoppingCartPage/ShoppingCartPage';
import { FavoritesPage } from './modules/FavoritesPage/FavoritesPage';
import { PageNotFound } from './modules/PageNotFound/PageNotFound';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { BurgerMenu } from './components/Header/BurgerMenu';
// eslint-disable-next-line max-len
import { ProductDetailsPage } from './modules/ProductDetailsPage/ProductDetailsPage';
import { ProductSlider } from './components/ProductSlider/ProductSlider';

export const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="home" element={<Navigate to="/" replace />} />
      <Route path="/phones" element={<ProductDetailsPage />} />
      <Route path="/phones">
        <Route index element={<PhonesPage />} />
        <Route path=":phoneId" element={<ProductDetailsPage />} />
      </Route>
      <Route path="/tablets" element={<TabletsPage />} />
      <Route path="/accessories" element={<AccessoriesPage />} />
      <Route path="/cart" element={<ShoppingCartPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/menu" element={<BurgerMenu />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer />

    <ProductSlider recommendedProducts={[
      {
        id: 'stirng',
        category: 'string',
        phoneId: 'string',
        itemId: 'string',
        name: '1',
        fullPrice: 5,
        price: 23,
        screen: 'string',
        capacity: 'string',
        color: 'string',
        ram: 'string',
        year: 453,
        image: 'string',
      },
      {
        id: 'stirng',
        category: 'string',
        phoneId: 'string',
        itemId: 'string',
        name: '2',
        fullPrice: 5,
        price: 23,
        screen: 'string',
        capacity: 'string',
        color: 'string',
        ram: 'string',
        year: 453,
        image: 'string',
      },
      {
        id: 'stirng',
        category: 'string',
        phoneId: 'string',
        itemId: 'string',
        name: '3',
        fullPrice: 5,
        price: 23,
        screen: 'string',
        capacity: 'string',
        color: 'string',
        ram: 'string',
        year: 453,
        image: 'string',
      },
      {
        id: 'stirng',
        category: 'string',
        phoneId: 'string',
        itemId: 'string',
        name: '4',
        fullPrice: 5,
        price: 23,
        screen: 'string',
        capacity: 'string',
        color: 'string',
        ram: 'string',
        year: 453,
        image: 'string',
      },
      {
        id: 'stirng',
        category: 'string',
        phoneId: 'string',
        itemId: 'string',
        name: '5',
        fullPrice: 5,
        price: 23,
        screen: 'string',
        capacity: 'string',
        color: 'string',
        ram: 'string',
        year: 453,
        image: 'string',
      },
      {
        id: 'stirng',
        category: 'string',
        phoneId: 'string',
        itemId: 'string',
        name: '6',
        fullPrice: 5,
        price: 23,
        screen: 'string',
        capacity: 'string',
        color: 'string',
        ram: 'string',
        year: 453,
        image: 'string',
      },
      {
        id: 'stirng',
        category: 'string',
        phoneId: 'string',
        itemId: 'string',
        name: '7',
        fullPrice: 5,
        price: 23,
        screen: 'string',
        capacity: 'string',
        color: 'string',
        ram: 'string',
        year: 453,
        image: 'string',
      },
      {
        id: 'stirng',
        category: 'string',
        phoneId: 'string',
        itemId: 'string',
        name: '8',
        fullPrice: 5,
        price: 23,
        screen: 'string',
        capacity: 'string',
        color: 'string',
        ram: 'string',
        year: 453,
        image: 'string',
      },
    ]}
    />
  </div>
);
