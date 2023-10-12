import './App.css';
import Nav from './components/nav';
import Nav2 from './components/nav2';
import Header from './components/header';
import Home from './components/home';
import Contact from './components/Contact';
import About from './components/About'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Blogs from './components/blogs';
import Product from './components/Product';
import Cart from './components/Cart';
import NotFoundPage from './components/error';
import { useEffect, useState } from 'react';
import CartForm from './components/CartForm';
import ProductPage from './components/productPage';

function App() {
  const [data, setData]=useState([]);
  const [pageItem, setPageItem]=useState({});
  const [trending, setTrending]=useState([]);
  useEffect(()=>{
   // submit({});
  },[])
  function submit(cart){
      setData([...data,cart]);
  }
  function handlePageItem(it){
    setPageItem(it);
    console.log('Handle ',it);
  }
  function removeFromCart(productId){
    const updatedCart = data.filter(item => item.name !== productId);
    setData(updatedCart);
  };

  return (
 <>
<BrowserRouter >
<header className='header'>
  
   <Header />
    <Nav length={data.length} />
   <Nav2 length={data.length} />
</header>
<Routes>
   <Route path='/'  element={<Home  trending={trending} handlePageItem={handlePageItem} submit={submit} /> } />
   <Route  path='/bicepfuels/' element={<Home  trending={trending} handlePageItem={handlePageItem} submit={submit} /> } />
   <Route path='/contact' element={<Contact />} />
   <Route path='/about' element={<About />} />
   <Route path='/blog' element={<Blogs />} />
  <Route path='/product/cart' element={<Cart removeFromCart={removeFromCart} cart={data} />} />
  <Route path='/product/cart/form' element={<CartForm cart={data}  />} />
  <Route path='/product/item' element={<ProductPage submit={submit} item={pageItem}  />} />
   <Route path='/product/*' element={<Product handlePageItem={handlePageItem} submit={submit} />} />
   <Route path='/*' element={<NotFoundPage />} />

  </Routes> 
   </BrowserRouter>
 </>
  );
}

export default App;
