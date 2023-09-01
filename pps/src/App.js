import log from './logo.svg';
// import './index.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Mediahanle from './Mediahandle';
import ImageGallery from './Mediagallery';
import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className='App'>
      <Header />
      <Content />
      <Mediahanle />
      <Routes>
        <Route path="/image-gallery" element={<ImageGallery />} />
        {/* Other routes if needed */}
      </Routes>
      <Footer />
    </div>
  </Router>



  );
}

export default App;
