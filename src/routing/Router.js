import React, { lazy, Suspense, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
//Components
import Loading from '../components/layout/Loading';
import NavBar from '../components/Navbar/NavBar'
//History from State
import { history } from '../redux/store';
//Pages
const Home = lazy(() => import('../pages/Home'));
const Tournaments = lazy(() => import('../pages/Tournaments'));

function Routing (props) {
    
    useEffect(() => {
      const unlisten = history.listen(() => {
        window.scrollTo(0, 0);
      });
      return () => {
        unlisten();
      };
    }, []);
    
    return (
      <Suspense fallback={<Loading />}>
          <Router history={history}>
            <NavBar/>
            <Route path="/" exact >
                <Home />
            </Route>
            <Route path="/tournaments">
                <Tournaments />
            </Route>
        </Router>
      </Suspense>
    );
  };
  
  export default Routing;