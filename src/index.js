import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import data from './data/data.json'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);
