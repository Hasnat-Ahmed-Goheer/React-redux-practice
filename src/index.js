import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import store from './Context/reduxStore'; 
import { Provider } from "react-redux";
import reduxStore from './Context/reduxStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>
);
