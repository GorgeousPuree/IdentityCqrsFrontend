import React from 'react';

import LoginComponent from './components/Account/LoginComponent';
import AppStyles from './App.module.css';

function App() {
  return (
    <div className={AppStyles.appWrapper}>
      <LoginComponent />
    </div>
  );
}

export default App;
