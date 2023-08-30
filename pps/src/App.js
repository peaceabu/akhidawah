import log from './logo.svg';
import './index.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Mediahanle from './Mediahandle';
import ImageGallery from './Mediagallery';

function App() {

  return (
    <div className='App'>
      <Header />
      <Mediahanle />
      <ImageGallery />      
      <Footer />
    </div>

  );
}

export default App;
