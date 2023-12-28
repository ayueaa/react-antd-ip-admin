import './styles/index.less';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './stores';
import { makeServer } from './mirage/server';


if (process.env.NODE_ENV === 'development') {
  console.log("---Use Mock API---")
  makeServer();
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
