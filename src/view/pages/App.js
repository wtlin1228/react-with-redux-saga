import React from 'react'
import { Router, Link } from '@reach/router'
import Cart from './Cart'
import Product from './Product'
import Example from './Example'

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>React Saga Example</header>
        <Router>
          <Example path="/" />
          <Cart path="/cart" />
          <Product path="/product" />
        </Router>
        <footer>
          <Link to="/">Example</Link> <Link to="/cart">Cart</Link>{' '}
          <Link to="/product">Product</Link>
        </footer>
      </div>
    </React.StrictMode>
  )
}

export default App
