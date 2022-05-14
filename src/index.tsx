import { createRoot } from "react-dom/client";
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import App from 'app/app';
import { appReducer } from 'store/store';
import { composeWithDevTools } from "redux-devtools-extension";

export const state = createStore(appReducer, composeWithDevTools());

const root = createRoot(document.getElementById('root') as HTMLElement);

// export const state = createStore(appReducer, initialState);

root.render(
  <Provider store={state}>
    <App />
  </Provider>
);


