import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
// import './style.scss'
import { BrowserRouter } from 'react-router-dom'
import {Store} from "./store"
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
  </BrowserRouter>
)
