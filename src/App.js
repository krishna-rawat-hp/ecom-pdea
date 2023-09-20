import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Product from './pages/Product';
import { ProductAPI } from './api/product-api';
import { setProducts } from './store/product/product-slice';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();

  const fetchProducts = async ()=>{
    const productList = await ProductAPI.fetchAll();
    dispatch(setProducts(productList));
  }

  useEffect(()=>{
    fetchProducts();
  },[])

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/registration' element={<Registration />} />
            <Route path='/' element={<Product />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
