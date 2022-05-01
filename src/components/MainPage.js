import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../style/styles.scss';

const MainPage = () => {

  return (
    <div id="home">
      <Header />
      <div className="content">
        <h1>A small bookcase in my hand</h1>
        <p>write a new book based on my emotions</p>
      </div>
      <Footer />
    </div>
  )
}

export default MainPage;