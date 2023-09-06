import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import './Mediagallery.css';
import './Common.css';
import firebaseConfig from './firebaseConfig';
import { initializeApp } from 'firebase/app';


const firebaseApp = initializeApp(firebaseConfig);	
const storage = getStorage(firebaseApp);

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const ImageGallery = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const capitalizedCategory = capitalizeFirstLetter(category);

  const storage = getStorage(firebaseApp);

  const getImageUrls = async () => {
    const imagesRef = ref(storage, `images/${category}`); // Construct the storage path dynamically

    const imageUrls = [];

    const imageList = await listAll(imagesRef);
    for (const imageRef of imageList.items) {
      const url = await getDownloadURL(imageRef);
      imageUrls.push(url);
    }

    return imageUrls;
  };

  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    async function fetchImageUrls() {
      const urls = await getImageUrls();
      setImageUrls(urls);
    }

    fetchImageUrls();
  }, [category]);

  return (
    <div id='image-gallery-container'>
       <h1 className='shared-header'>{capitalizedCategory} Images</h1>
    <div className='galleryDiv'>
      {imageUrls.map((url, index) => (
        <img key={index} src={url} alt={`Image ${index}`} className='img'/>    
      ))}
    </div>
    </div>
  );
};

export default ImageGallery;
