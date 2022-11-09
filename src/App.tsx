import React from 'react'
import { Routes, Route } from 'react-router-dom'

import LoginComponent from './components/loginComponent';
import Navigation from './components/navigation';

function App() {
  return (
    <div className='App'>
        <Navigation/>
        <Routes>
          <Route path='/login' element={<LoginComponent/>}/>
        </Routes>
    </div>
  );
}

export default App;
