import React from 'react'
import ReactDOM from 'react-dom/client';
import './styles/main.css';

import { CounterApp } from './01-useState/CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <CounterApp />
  </React.StrictMode>
)
