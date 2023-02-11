import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { MyCard } from './pages/MyCard';
import { MyOrder } from './pages/MyOrder';
import { ProductDetails } from './pages/ProductDetails';
import { Products } from './pages/Products';

function App() {

  return(
  <div className='App'>
    <Header/>
     
     <Routes>
      <Route path='/products' element={ <Products />}>
         <Route path=':id' element={ <ProductDetails />}/>
      </Route>
      <Route path='/myCard' element={ <MyCard />} />
      <Route path='/myOrder' element={ <MyOrder />} />
     </Routes>
  </div>
  )
}

export default App;
