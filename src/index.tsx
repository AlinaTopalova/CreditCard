import { createRoot } from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from 'app/app';
import { appReducer } from 'store/store';

const state = createStore(appReducer, composeWithDevTools());

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={state}>
    <App />
  </Provider>
);


