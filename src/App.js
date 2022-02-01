import React from 'react';
// import Home from './components/BillSystem/Home'
// import Home from './components/CRUDphp/CRUD'
import Home from './components/PhotoGalary/Home';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div>
      <Home />
    </div>
    </Router>
  );
}

export default App;
