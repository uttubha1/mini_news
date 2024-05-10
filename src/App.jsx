import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { PageLayout } from './pagelayout/PageLayout'

function App() {
  const [active, setActive] = useState(1);

  return (
    <Router>
      <div className="flex h-screen">
        <div className="flex flex-col flex-1">
          {/* <Navbar /> */}
          <Routes>
            <Route path='/' element={<PageLayout active={active} setActive={setActive} />}/>
            <Route path="/sports" element={<SportsPage />} />
            <Route path="/business" element={<BusinessPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
