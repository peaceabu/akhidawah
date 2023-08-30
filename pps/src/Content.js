import React,{ useState } from 'react'
import {FaTrash} from "react-icons/fa";

export const Content = () => {
    const [items, setItems] = useState([
      {_id:1,
        booleanval:true,
        name:"Learn React"
        },{_id:2,
          booleanval:true,
          name:"Pray All Fard"
          },
          {_id:3,
            booleanval:true,
            name:"Drink kitres water"
            }
      ]
      )
    // const [isVisible, InVisible] = useState(false);
    // const [textval, setTexval] = useState('Salam')
    // const handleImg = () => {
    //     console.log('Clicked')
    //     InVisible(!isVisible);
    //     eventchange()
    // }
    // const eventchange = () => {    
    //   const names = ["Salam","Hi","Hello"];
    //   const int = Math.floor(Math.random() * 3);
    //   console.log(int)
    //   setTexval(names[int])
    // }
  return (
    <main className="App-header">
      <ul>
        {items.map((itm) => (
        <li className='itemcls' key={itm._id}>
          <input type="checkbox"
          checked={itm.booleanval}
          />
          <label>{itm.name}</label> 
          <FaTrash role='button' tabIndex="0"/>         
        </li>
        ))}
      </ul>
    </main>

  
  
  
    //   <header className="App-header">        
  //   <p>
  //     {textval} <code>Peace Page Solutions</code> welcomes you.
  //   </p>
  //   <img src={'/plus.png'} alt="PNG Image" className="image-style" onClick={handleImg}/>
  //   {
  //       isVisible && <div className='mainDiv'>
  //       Do Something Here...
  //   </div>
  //   }    
  // </header>
  )
}




// function eventchange() {    
//     const names = ["Salam","Hi","Hello"];
//     const int = Math.floor(Math.random() * 3);
//     console.log(int)
//     setTexval(names[int])
//   }
export default Content