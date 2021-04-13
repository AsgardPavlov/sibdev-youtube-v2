import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Login from '../Login/Login';
import useToken from './useToken';
import Search from '../Pages/Search';
import Navbar from '../navbar/Navbar'
import Favourites from '../Pages/Favourites';

export default function App() {
  
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div>
      <BrowserRouter>
          <Navbar setToken={setToken}/>
          <Switch>
            <Route exact path="/">
              <Search/>
            </Route>
            <Route path="/liked">
              <Favourites/>
            </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}
