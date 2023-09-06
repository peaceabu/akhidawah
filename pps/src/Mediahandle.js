import React, { useState } from 'react';
import firebase from 'firebase/compat/app';

import 'firebase/compat/storage';
import 'firebase/compat/database';
import './MediaHanle.css';
import './Common.css';
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



const Mediahanle = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const navigate = useNavigate();

  const navigateToImageGallery = () => {
    navigate('/image-gallery');
  };
  const handleFileUpload = (event) => {
    console.log('click')
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
    <div className="HandleAppCls">
      <h1 className='shared-header'>Share Your Work</h1>
      <header className="HandleAppCls-header">
        
        <p>{'Narrated `Abdullah bin `Amr, “The Prophet (ﷺ) said, "Convey (my teachings) to the people even if it were a single sentence'}</p>
        <p>{"Sahih al Bukhaari, Book of Prophets, hadith-3461."}</p>

        <div className='uploadDiv'>
           {'Upload Image'}
        <label htmlFor="fileInput" className="custom-file-input">
        <img src={'/plus.png'} alt="PNG Image" className="image-style" />
        <input
          type="file"
          id="fileInput"
          onChange={handleFileUpload}
          style={{ display: 'none' }} />
         
      </label>
     
      </div>
        {selectedFile && (
          <div>
            <p>Selected File: {selectedFile.name}</p>
            <img src={URL.createObjectURL(selectedFile)} className='imgfile' alt="Selected" />
          </div>
        )}
        {uploadSuccess && <p className="success-message">Image uploaded successfully!</p>}

      </header>
    </div>

  );
}

export default Mediahanle;
