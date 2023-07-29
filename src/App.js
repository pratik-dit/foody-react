import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/layout/HeaderComponent';
import FooterComponent from './components/layout/FooterComponent';
import ListMealCategoryComponent from './components/ListMealCatgoryComponents';
import ListMealComponent from './components/ListMealComponents';
import MealComponents from './components/MealComponents';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route path="/" element={<ListMealCategoryComponent />}></Route>
            <Route path="/category/:id" element={<ListMealComponent />}></Route>            
          </Routes>
        </div>
        <Routes>
          <Route path = "/meal/:id" element={<MealComponents />}></Route>
        </Routes>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
