import React, { useState } from 'react'
import { BsCart2 } from "react-icons/bs";
import './Mainapp.css'

export default function Mainapp({count, setCount, setOpenCart, openHamburger}) {
  const [selectedimage, setSelectedImage] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }
  const decrease = () => {
    if (count > 0){
      setCount(count - 1 )
    } 
  }
  const setImage = (id) => {
    setSelectedImage(id)
  } 
  const cartOpen = () => {
    setOpenCart(true)
  }
  const previous = () => {
    if (selectedimage === 0) {
      setSelectedImage(3)
    } else
    setSelectedImage(selectedimage - 1)
  }

  const next = () => {
    if (selectedimage === 3){
      setSelectedImage(0)
    } else
    setSelectedImage(selectedimage + 1)
  }

  const images = [
    {
      id: 1,
      src: 'image-product-1.jpg'
    },
    {
      id: 2,
      src: 'image-product-2.jpg'
    },
    {
      id: 3,
      src: 'image-product-3.jpg'
    },
    {
      id: 4,
      src: 'image-product-4.jpg'
    }
  ]

  return (
    <div className='MainappContainer' >

      <div className='Images' onClick={() => setOpenCart(false)} >
        <div className='ImageSlider'>
          {openHamburger || 
          <div className= "previous" onClick={previous}>
            <img src='icon-previous.svg' className='prevarrow' />
          </div>}
          {images.map((image, index) => (
            <img key={image.id} src={image.src} className={`MainImage ${index === selectedimage? "selected" : ""}`} />
          )
          )}
          <div className= "next" onClick={next}>
            <img src='icon-next.svg' className='nextarrow' />
          </div>
        </div>

        <div className='SmallImages'>
          {images.map((image, index ) => (
            <img src={image.src} alt={`Image ${image.id}`} key={index} onClick={() => setImage(index)} className={`SmallImage ${index === selectedimage? "SelectedImage" : ""}`}/>
          ))}
        </div>

      </div>

      <div className='MainContent'>

        <div className='Content' onClick={() => setOpenCart(false)}>        
          <h5> SNEAKER COMPANY </h5>
          <h1 className='ItemName'> Fall Limited Edition Sneakers</h1>
          <p className='ItemContent'> These low profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer </p>
          <div className='NewPrice'>
            <h1> $125.00 </h1>
            <p> 50% </p>
          </div>
          <p className='OldPrice'> $250.00 </p>
        </div>
        
        <div className='Buttons'>
          <div className='Counter'>
            <div className='decrease' onClick={decrease}>
              <img src='icon-minus.svg' alt='reduce' />
            </div>
            <p> {count} </p>
            <div className='increase' onClick={increase}>
              <img src='icon-plus.svg' alt='increase'/>
            </div>
          </div>
          <div className='AddToCart'>
            <button onClick={cartOpen}> <BsCart2 size={30} className='Cart' /> Add to cart </button>
          </div>
        </div>
      </div>

    </div>
  )
}
