import React, { useState } from 'react';
import firebase from 'firebase/compat/app';

import 'firebase/compat/storage';
import 'firebase/compat/database';
import './About.css';
import './Common.css';
// import { Link, useNavigate } from 'react-router-dom';
// import firebaseConfig from './firebaseConfig';



// firebase.initializeApp(firebaseConfig);



const About = () => {
  return (
    <div className="About">
      <h1 className='shared-header'>About Us</h1>
       
    <div className="AboutMsg">
        <p>At Akhi Dawah, we are passionate about showcasing the Quran Verse and Hadees in both Tamil and English. Our team is committed to curating a diverse range of images that capture the essence of Islamic heritage. Whether you're an art enthusiast, a student of history, or simply someone who appreciates the beauty of Islamic imagery, we invite you to join our community and explore the captivating world of Islamic art.</p>
    </div>

    </div>

  );
}




export default About