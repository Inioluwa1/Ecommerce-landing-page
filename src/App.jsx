import { useState } from 'react'
import Header from './Components/Header'
import Mainapp from './Components/Mainapp'
import Cart from './Components/Cart'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [openCart, setOpenCart ] = useState(false)
  const [openHamburger, setOpenHamburger] = useState(false)

  return (
    <div>
      <Header 
        setOpenCart={setOpenCart} 
        openHamburger={openHamburger} 
        setOpenHamburger={setOpenHamburger} />
      <Mainapp 
        count={count} 
        setCount={setCount} 
        setOpenCart={setOpenCart}
        openHamburger={openHamburger} />
      {openCart && <Cart 
                      count={count} 
                      setOpenCart = {setOpenCart} />}
    </div>
  )
}

export default App
