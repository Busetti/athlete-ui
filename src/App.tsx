import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { AgGridTable } from './components/ag-grid-table/ag-grid-table';
import Home from './components/home/home';

function App() {
  return (
    <div className="App" style={{margin: '40px'}}>
      <h4>Spring Boot - React</h4>
      <Router>
        <Routes>
        <Route path='' element={<Home/>}></Route>
          <Route path='ag-grid-table' element={<AgGridTable/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
