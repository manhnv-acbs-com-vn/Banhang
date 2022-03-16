import React from 'react';
import Header  from "./component/Hearder/Header";
import Nav  from "./component/Navbar/Nav";


import './App.css';
import Router from './Router/Router';
import Footer from './component/Footer/Footer';

function App() {
  return (
   <div className='app'>
       <Header/>
         <Nav/>
          <Router/>
            <Footer/>
    </div>
  );
}

export default App;
