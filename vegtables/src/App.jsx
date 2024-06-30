import { useState } from 'react'
import './App.css'


  function App() {
    const [cart, setCart] = useState([])
    const [page] = useState('products')
    const [Products] = useState([
      {
        name: 'Onion',
        price: 50,
        image: './public/onion.png',
      },
      {
        name: 'Tomato',
        price: 40,
        image: './public/tomato.png',
      },
      {
        name: 'Potato',
        price: 60,
        image: './public/potato.png',
      },
      {
        name: 'Carrot',
        price: 70,
        image: './public/carrot.png',
      },
      {
        name: 'Brinjal',
        price: 80,
        image: './public/Brinjal.png',
      },
      {
        name: 'Beans',
        price: 100,
        image: './public/beans.png',
      },
      {
        name: 'Beetroot',
        price: 110,
        image: './public/beetroot.png',
      }
    ])

    const addToCart = (product) => {
      setCart([...cart, product])
      console.log(product)
    }
    return (
      <div className="App">
        <header>
          <button>GO TO Cart({cart.length})</button>
          <button>Product view</button>
        </header>
        {page === 'products' && (
          <div>
            <h1>Products</h1>
            <div>
              <h3>Onion</h3>
              <h4>RS.50</h4>
              <button onClick={() => addToCart(Products[0])}>Add to cart</button>
            </div>
            <div>
              <h3>Tomato</h3>
              <h4>RS.40</h4>
              <img src='./public/tomato.png' alt='tomato' />
              <button onClick={() => addToCart(Products[1])}>Add to cart</button>
            </div>
            <div>
              <h3>Potato</h3>
              <h4>RS.60</h4>
              <img src='./public/potato.png' alt='potato' />
              <button onClick={() => addToCart(Products[2])}>Add to cart</button>
            </div>
            <div>
              <h3>Carrot</h3>
              <h4>RS.70</h4>
              <img src='./public/carrot.png' alt='carrot' />
              <button onClick={() => addToCart(Products[3])}>Add to cart</button>
            </div>
            <div>
              <h3>Brinjal</h3>
              <h4>RS.80</h4>
              <img src='./public/Brinjal.png' alt='Brinjal' />
              <button onClick={() => addToCart(Products[4])}>Add to cart</button>
            </div>
            <div>
              <h3>Beans</h3>
              <h4>RS.100</h4>
              <img src='./public/beans.png' alt='beans' />
              <button onClick={() => addToCart(Products[5])}>Add to cart</button>
            </div>
            <div>
              <h3>Beetroot</h3>
              <h4>RS.110</h4>
              <img src='./public/beetroot.png' alt='beetroot' />
              <button onClick={() => addToCart(Products[6])}>Add to cart</button>
            </div>
          </div>
        )}
      </div>
    )
  }
export default App

