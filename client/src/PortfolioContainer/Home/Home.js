import React from 'react';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './Home.css'

function Home(props) {
    return (
        <div className="home-container" id={props.id || ""}>
      <Header />
      <Profile />
      <Footer />
    </div>
    );
}

export default Home;