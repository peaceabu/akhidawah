// Category.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Category.css';
import './Common.css';

const Category = () => {
  const navigate = useNavigate();

  const navigateToImageGallery = (category) => {
    navigate(`/image-gallery/${category}`);
  };

  return (
    <div>
      <h1 className='shared-header'>Category</h1>
      <div className='ImgCat'>
      <div className='ViewQuranOptions'>
          <h1>Quran Verses</h1>
          <button onClick={() => navigateToImageGallery('quran')}>View Images</button>
        </div>
        <div className='ViewImgOptions'>
          <h1>Hadees Images</h1>
          <button onClick={() => navigateToImageGallery('hadees')}>View Images</button>
        </div>
       
        <div className='ViewWallpaperOptions'>
          <h1>Islamic Wallpapers</h1>
          <button onClick={() => navigateToImageGallery('wallpaper')}>View Images</button>
        </div>
      </div>
    </div>
  );
};

export default Category;
