import Navbar from './Components/Navbar';
import SignUp from './Components/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
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
            <Route path='/' element={<SignUp />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/product' element={<Product />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
