import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import WishList from './pages/WishList'
import { Toaster } from 'react-hot-toast'
import ProductCategory from './pages/ProductCategory'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import Signup from './pages/Signup'
import Login from './pages/Login'
import ScrollToTop from './components/ScrollToTop'
import PageNotfound from './pages/PageNotFound'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'
import Contact from './pages/Contact'
import Account from './pages/Account'
import Checkout from './pages/Checkout'

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Toaster />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:category' element={<ProductCategory />} />
        <Route path='/products/:category/:id' element={<ProductDetails />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/account' element={<Account />} />
        <Route path='/*' element={<PageNotfound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App