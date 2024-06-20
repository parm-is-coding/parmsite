import React from 'react';
import Navigation from './Components/Navigation';
import HomeContent from './Components/HomeContent.jsx';

function Home() {
    return (
      <div className = "Content">
        <HomeContent/>
        <Navigation />
      </div>
    );
  }

export default Home;