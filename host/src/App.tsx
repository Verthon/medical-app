import React from 'react';
import './App.css';
import { DoctorsLoader } from './microfrontends/DoctorsLoader';

function App() {
  return (
    <div className="App">
      <nav>Host</nav>
      <DoctorsLoader />
    </div>
  );
}

export default App;
