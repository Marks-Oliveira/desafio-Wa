import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserIssuesProvider } from './providers/userIssues';

ReactDOM.render(
  <React.StrictMode>
    <UserIssuesProvider>
      <App />
    </UserIssuesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
