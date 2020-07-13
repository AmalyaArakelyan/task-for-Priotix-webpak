import React from 'react';
//Style
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/Globals.scss"
//Routing
import Router from './routing/Router';
//Redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Router />
            </div>
        </Provider>
    
    );
}

export default App;
