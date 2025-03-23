import React, {useState} from 'react'
import './Header.css'

export default function Header({setOpenCart}) {
  const [select, setSelect] = useState(0)

  const Links = [
    {
      id: 1,
      text: "Collections"
    },
    {
      id: 2,
      text: "Menu"
    },
    {
      id: 3,
      text: "Women"
    },
    {
      id: 4,
      text: "About"
    },
    {
      id: 5,
      text: "Contact"
    },

  ]

  const handleSelection = (id)=> {
    setSelect(id)
  }

  const openCart = () => {
    setOpenCart(true)
  }

  return (
    <div className='Header' >
      <div className="HeaderContainer">
      <div className="LogoLinks">
        <div className="Logo">
          <h1> sneakers </h1>
        </div>
        <div className="Links">
          {Links.map((indLinks, index) => (
            <p onClick={() => handleSelection(index)} key={index}> {indLinks.text} </p>
          ))}
        </div>
      </div>
      <div className="Profiles">
        <img src='/icon-cart.svg' alt='Cart' className="cart" onClick={openCart} />
        <img src='/image-avatar.png' alt='Profile' className="profile"/>
      </div>
      </div>
      
      <div className='Dash'>
        {Links.map((_, index)=> (
          <span 
          key={index} 
          className={`indDash ${index === select? "selected" : ""}`}
          > 
          </span>
        ))}
      </div>
    </div>
  )
}
