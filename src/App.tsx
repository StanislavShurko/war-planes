import React from 'react';
import './styles/index.scss';
import Planes from './pages/Planes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PlaneInfo from './pages/PlaneInfo';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Planes />} />
            <Route path=":id" element={<PlaneInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
