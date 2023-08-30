import { initializeApp } from 'firebase/app';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import './App.css';

const firebaseConfig = {
  apiKey: "AIzaSyAYP5-fxE-1zVLAuIJWLBQWx5daQCTGXUg",
  authDomain: "kaswa-1d3ad.firebaseapp.com",
  projectId: "kaswa-1d3ad",
  storageBucket: "kaswa-1d3ad.appspot.com",
  messagingSenderId: "395330435248",
  appId: "1:395330435248:web:7df5635bbc8474b92ea375",  
};
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

const getImageUrls = async () => {
  const imagesRef = ref(storage, 'images'); // Change this to your storage path

  const imageUrls = [];

  const imageList = await listAll(imagesRef);
  for (const imageRef of imageList.items) {
    const url = await getDownloadURL(imageRef);
    imageUrls.push(url);
  }

  return imageUrls;
};

const ImageGallery = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    async function fetchImageUrls() {
      const urls = await getImageUrls();
      setImageUrls(urls);
    }

    fetchImageUrls();
  }, []);

  return (
    <div className="image-style">
      {imageUrls.map((url, index) => (
        <img key={index} src={url} alt={`Image ${index}`} />
      ))}
    </div>
  );
};

export default ImageGallery;