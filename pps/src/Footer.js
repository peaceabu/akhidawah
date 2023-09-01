import React from 'react'
import './Footer.css'

const Footer = () => {
    const year = new Date();
  return (
    
<div className='footer-menu'>
  <footer>
    
    <div className='footer-menu'>
    <div className='footer-top'>
    <p> Copyrights &copy; {new Date().getFullYear()}  </p>
    </div>
    <div className='footer-bottom'>
    <a href="http://www.peacepagesolutions.site">www.peacepagesolutions.site</a>
      
    </div>
  </div>
  </footer>
</div>




  )
}

export default Footer