import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardList from './components/CardList/CardList';
import Header from './components/header/Header'
import ListItem from './components/ListItem/ListItem';
import ListTest from './components/ListTest/ListTest';
import Test from './components/Test/Test';


function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ListItem />} />
          <Route path='/list-tests' element={<ListTest />} />
          <Route path='/card-list' element={<CardList />} />
          <Route path='/test-list' element={<ListTest />} />
          <Route path='/test' element={<Test /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
