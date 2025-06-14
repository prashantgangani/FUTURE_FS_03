import Navbaar from './Components/header/Navbaar';
import Newnav from './Components/newnav/Newnav';
import Maincomp from './Components/home/Maincomp';
import Footer from './Components/footer/Footer';
import Signup from './Components/signup_signin/SignUp';
import Sign_in from './Components/signup_signin/Sign_in';
import Cart from './Components/cart/Cart';
import Buynow from './Components/buynow/Buynow';
import Placeholder from './Components/Placeholder';
import Mobiles from './Components/Mobiles';
import './App.css';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Switch, Route } from "react-router-dom";


function App() {
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  }, [])


  return (
    <>
      {
        data ? (
          <>
            <Navbaar />
            <Newnav />
            <div className="main-content">
              <Switch>
                <Route exact path="/">
                  <Maincomp />
                </Route>
                <Route exact path="/signup">
                  <Signup />
                </Route>
                <Route exact path="/login">
                  <Sign_in />
                </Route>
                <Route exact path="/getproductsone/:id">
                  <Cart />
                </Route>
                <Route exact path="/buynow">
                  <Buynow />
                </Route>
                <Route exact path="/all">
                  <Maincomp />
                </Route>
                <Route exact path="/mobiles">
                  <Mobiles />
                </Route>
                <Route exact path="/best-sellers">
                  <Placeholder title="Best Sellers" />
                </Route>
                <Route exact path="/fashion">
                  <Placeholder title="Fashion" />
                </Route>
                <Route exact path="/customer-service">
                  <Placeholder title="Customer Service" />
                </Route>
                <Route exact path="/electronics">
                  <Placeholder title="Electronics" />
                </Route>
                <Route exact path="/prime">
                  <Placeholder title="Prime" />
                </Route>
                <Route exact path="/todays-deals">
                  <Placeholder title="Today's Deals" />
                </Route>
                <Route exact path="/amazon-pay">
                  <Placeholder title="Amazon Pay" />
                </Route>
              </Switch>
            </div>
            <Footer />
          </>
        ) : (
          <div className="circle">
            <CircularProgress />
            <h2> Loading....</h2>
          </div>
        )
      }

    </>
  );
}

export default App;
