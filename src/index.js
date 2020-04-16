import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offers from "./mocks/offers.js";
import {Provider} from 'react-redux';
import store from './store/store.js';

ReactDOM.render(
    <Provider store={store}>
      <App offers={offers} />
    </Provider>,
    document.getElementById(`root`)
);
