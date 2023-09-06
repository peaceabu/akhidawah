import log from './logo.svg';
// import './index.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Mediahanle from './Mediahandle';
import ImageGallery from './Mediagallery';
import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom';
import Category from './Category';
import About from './About';
import React, { useRef } from 'react';
import Layout from './Layout';

function App() {
  const scrollToRef = useRef(null);

  return (
    <Router>
    <div className='App'>
  
      <Routes>
      <Route
            path="/"
            element={
              <Layout>
                <Content />
              </Layout>
            }
          />
          
          {/* <Route
            path="/image-gallery"
            element={
              <Layout>
                <ImageGallery />
              </Layout>
            }
          /> */}
          <Route path="/image-gallery/:category" element={<Layout><ImageGallery /></Layout>} />
          <Route
            path="/category"
            element={
              <Layout>
                <Category />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/contribute"
            element={
              <Layout>
                <Mediahanle />
              </Layout>
            }
          />
        </Routes>


    </div>
  </Router>



  );
}

export default App;
