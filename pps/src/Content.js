import React, { useState } from 'react';
import firebase from 'firebase/compat/app';

import 'firebase/compat/storage';
import 'firebase/compat/database';
import './Content.css';
import './Common.css';
// import { Link, useNavigate } from 'react-router-dom';
// import firebaseConfig from './firebaseConfig';



// firebase.initializeApp(firebaseConfig);



const Content = () => {
  return (
    <div className="App">
      <h1 className='shared-header'>Islamic Image Gallery</h1>
      <header className="App-header">
        
      <div className="quote">
        <p>"There is no god but He: That is the witness of Allah, His angels, and those endued with knowledge, standing firm on justice. There is no god but He, the Exalted in Power, the Wise  <b>[Quran, 3:18]</b>"</p>
       
    </div>
    <div className="welcome-message">
        <p>Welcome to Akhi Dawah, an initiative of the Islamic Research Foundation, where you'll find a diverse collection of Islamic images. Our platform is dedicated to providing a visually inspiring experience that allows you to immerse yourself in high-quality images containing Quranic verses and Hadiths. Explore our extensive collection, organized into various categories, to discover the essence of Islamic aesthetics.</p>
    </div>

      </header>
    </div>

  );
}




export default Content