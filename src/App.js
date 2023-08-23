import React from 'react';
import './App.css';

//fonts
import './fonts.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services'
import Footer from './components/Footer';

const App = () => {

  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>

      <Navbar />
      <Home />
      <Services />
      <Footer />

    </div>
  );
}

export default App;
