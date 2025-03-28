import React, {useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io"; 
import './Header.css'

export default function Header({setOpenCart, openHamburger, setOpenHamburger}) {
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
      {openHamburger? 
      <IoMdClose className='Hamburger' size={30} onClick={() => setOpenHamburger(false)} /> :
      <GiHamburgerMenu className="Hamburger" size={30} onClick={() => setOpenHamburger(true)} />}
      <div className="LogoLinks">
        <div className="Logo">
          <h1> sneakers </h1>
        </div>
        <div className={`Links ${openHamburger? "Linksopen" : ""}`}>
          <IoMdClose className='Hamburger' size={30} onClick={() => setOpenHamburger(false)} />
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
