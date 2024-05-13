import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import { PageLayout } from './pagelayout/PageLayout';
import { HomePage } from './pages/homePage/HomePage';
import { SportsPage } from './pages/sportsPage/SportsPage';
import { BusinessPage } from './pages/businessPage/BusinessPage';
import { TechnologyPage } from './pages/technologyPage/TechnologyPage';

function App() {
  const [active, setActive] = useState(1);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<PageLayout active={active} setActive={setActive} />}>
        <Route path='/' element={
            <>
              {
                active == 1 ?
                <HomePage active={active} setActive={setActive}/>
                :
                active == 2?
                <BusinessPage active={active} setActive={setActive}/>
                :
                active == 3?
                <SportsPage active={active} setActive={setActive}/>
                :
                active == 4?
                <TechnologyPage active={active} setActive={setActive}/>
                :null
              }
            </>
          }/>
          </Route>  
        </Routes>
    </div>
  );
}

export default App;
