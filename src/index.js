import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './main/App';
import reportWebVitals from './reportWebVitals';
import "./i18n"
import {store} from './store/store'
import {Provider} from "react-redux";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import TermsOfUse from "./terms/terms_of_use";
import PrivacyPolicy from "./terms/privacy_policy";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <HashRouter>
              <Routes>
                  <Route path="/terms_and_conditions" element={<TermsOfUse />} />
                  <Route path="/privacy_policy" element={<PrivacyPolicy />} />
                  <Route path="/" element={<App />}/>
              </Routes>
          </HashRouter>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
