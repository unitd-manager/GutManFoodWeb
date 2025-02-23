import React from 'react';
import './css/plugins.css';
import './css/style.css';
import './css/templete.css';
import './css/skin/skin-1.css'; 
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { save, load } from "redux-localstorage-simple";
import { Provider } from "react-redux";
import store from './redux/store';
import { Toaster } from 'react-hot-toast';
 

import Markup from './markup/Markup';

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" reverseOrder={false} />
		<Markup />
   
    </div>
  );
}

export default App;
