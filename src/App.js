
import React from 'react'
import { Route,Routes } from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import MemberPage from './pages/MemberPage';
import BodyGardpage from './pages/BodyGardpage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<FirstPage />}/>
      <Route path='/Member' element={<MemberPage />}/>
      <Route path='/Bodygrad' element={<BodyGardpage />}/>
    </Routes>
  );
}

export default App;
