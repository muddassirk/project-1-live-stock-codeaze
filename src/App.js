import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import img from './assets/liveStock.JPG'
import './App.css';
import Footer from './components/Footer';
import VenderRouting from './routing/VenderRouting';
import Header from './components/Constant/Header';
import NavBar from './components/Constant/NavBar';
import BuyerDashboard from './components/BuyerDashboard/BuyerDashboard';
import BuyerProductDetails from './components/BuyerDashboard/BuyerProductDetails';
import BuyerShopingCart from './components/BuyerDashboard/BuyerShopingCart';

function App() {
  return (
    <>
    {/* <BuyerDashboard /> */}
    {/* <BuyerProductDetails /> */}
    {/* <BuyerShopingCart /> */}
    <VenderRouting />
    </>
    // <Router>
    //   <div className="container py-5">
    //     <div className='text-center'>
    //       <h1>Welcome to Live Stock Mandi</h1>
    //       <h3>Working Sign in</h3>
    //     </div>
    //     {/* <div className='col-sm-6 col-md-5 col-lg-6'> */}
    //     <div className='row'>
    //       <div className='col-lg-6 my-4'>
    //         <img src={img} className='w-100' height='100%' alt='image' />
    //       </div>
    //       <Switch>
    //         <div className='col-lg-6'>
    //           <Route exact path='/'>
    //             <Login />
    //           </Route>
    //           <Route path='/signup'>
    //             <Signup />
    //           </Route>
    //         </div>
    //         {/* <div className='col-lg-6'>
    //         <Route path='/signup'>
    //             <Signup />
    //         </Route>
    //       </div> */}
    //       </Switch>

    //     </div>
    //   </div>
    //   <div style={{ position: 'fixed', bottom: '0%', width: '100%' }}>
    //     <Footer />
    //   </div>


    // </Router>
  
  );
}

export default App;
