import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import { Switch, Route } from 'react-router-dom'
import Hatspage from './pages/hatspage/hatspage.component'
import Snakerspage from './pages/snakerspage/snakerspage.component'
import Jacketspage from './pages/jacketspage/jacketspage.component'
import Menspage from './pages/menspage/menspage.component'
import Womenspage from './pages/womenspage/womenspage.component'
import Shoppage from './pages/shoppage/shoppage.component'
function App() {
  return (
    <div>
      <Switch>
        <Route exact path = '/' component = {Homepage}/>
        <Route path = '/hats' component = {Hatspage}/>
        <Route path = '/jackets' component = {Jacketspage}/>
        <Route path = '/snakers' component = {Snakerspage}/>
        <Route path = '/mens' component = {Menspage}/>
        <Route path = '/womens' component = {Womenspage}/>
        <Route path = '/shop' component = {Shoppage}/>
      </Switch>
    </div>
  );
}

export default App;
