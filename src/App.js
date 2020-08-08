import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import FoodList from './components/FoodList';
import FoodDetail from './components/FoodDetail';

function App() {
  return (
    <div className="App">
      <div id="root">
        <div className="container">
          <div className="top-pan left-pan">
            <Route path="/foods/detail/:id" component={FoodDetail} />
          </div>
          <div className="bottom-pan right-pan">
            <Route path="/" component={FoodList}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
