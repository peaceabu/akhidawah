import React from 'react'

const Footer = () => {
    const year = new Date();
  return (
    
    <div>
    <footer
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
     www.peacepagesolutions.site
    </footer>
    Copyrights &copy; { year.getFullYear() }
    </div>

  )
}

export default Footer