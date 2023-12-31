import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HelmetProvider>
    <Helmet>
        <title>Ecommerce</title>
      </Helmet>
      <App />
    </HelmetProvider>
  </Provider>
);

