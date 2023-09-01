import React, { useState } from 'react';
import firebase from 'firebase/compat/app';

import 'firebase/compat/storage';
import 'firebase/compat/database';
import './Content.css';
import { Link, useNavigate } from 'react-router-dom';
// Initialize Firebase with your configuration

const firebaseConfig = {
  apiKey: "AIzaSyAYP5-fxE-1zVLAuIJWLBQWx5daQCTGXUg",
  authDomain: "kaswa-1d3ad.firebaseapp.com",
  projectId: "kaswa-1d3ad",
  storageBucket: "kaswa-1d3ad.appspot.com",
  messagingSenderId: "395330435248",
  appId: "1:395330435248:web:7df5635bbc8474b92ea375",  
};

firebase.initializeApp(firebaseConfig);



const Content = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const navigate = useNavigate();

  const navigateToImageGallery = () => {
    navigate('/image-gallery');
  };
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Upload the image to Firebase Storage
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child('images/' + file.name);

    imageRef.put(file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      setUploadSuccess(true)

      // Get the image URL
      imageRef.getDownloadURL().then((url) => {
        // Save the image reference in the Firebase Realtime Database
        const databaseRef = firebase.database().ref('images');
        databaseRef.push(url, (error) => {
          if (error) {
            console.error('Error saving image reference:', error);
          } else {
            console.log('Image reference saved successfully!');
            setUploadSuccess(true)
          }
        });
      });
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Islamic Image Gallery</h1>
        <p>{'There is no god but He: That is the witness of Allah, His angels, and those endued with knowledge, standing firm on justice. There is no god but He, the Exalted in Power, the Wise'}</p>
        <p>{"[Quran, 3:18]."}</p>


<div className='ImgCat'>
      <div className='ViewImgOptions'>
      <h1>Latest Images</h1>
      <button onClick={navigateToImageGallery}>View Images</button>
    </div>
    
          <div className='ViewQuranOptions'>
          <h1>Quran Verses</h1>
          <button onClick={navigateToImageGallery}>View Images</button>
        </div>
        <div className='ViewWallpaperOptions'>
        <h1>Islamic Wallpapers</h1>
        <button onClick={navigateToImageGallery}>View Images</button>
      </div>
      </div>
      </header>
    </div>

  );
}




export default Content