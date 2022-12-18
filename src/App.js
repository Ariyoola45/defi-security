import React from 'react';

import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Data from './Components/data/Data'
import Cloud from './Components/cloud/Cloud'
import Footer from './Components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Data />
      <Cloud />
      <Footer/>
    </div>
  );
}

export default App;
