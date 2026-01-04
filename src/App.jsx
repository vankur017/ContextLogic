import { useState } from 'react'

import Body from './components/Body'
import { CartProvider } from './utils/CartContext'

function App() {
 

  return (
    <>
      <CartProvider>
        <Body />  
      </CartProvider>
    </>
  )
}

export default App
