import styled from 'styled-components'
import NavBar from './components/NavBar'
import Products from './containers/Products'
import Basket from './components/Basket'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

  const ProductArray = [
    {id: 1000,
    name: 'Kenya',
    price_per_kg: 10.00,
    description: 'Balanced for all brewing methods',
    kg_in_stock: 7.5,
    roast: 'medium',
    image: 'e-commerce-hw/src/coffee.jpg'
    },

    {id: 1001,
    name: 'Ethiopia',
    price_per_kg: 9.5,
    description: '',
    kg_in_stock: 12.4,
    roast: 'dark',
    image: './coffee.jpg'
    },

    {id: 1002,
    name: 'Costa Rica',
    price_per_kg: 13,
    description: '',
    kg_in_stock: 3.25,
    roast: 'medium',
    image: '../coffee.jpg'
    },

    {id: 1003,
    name: 'Colombia',
    price_per_kg: 10,
    description: '',
    kg_in_stock: 1.0,
    roast: 'light',
    image: '../src/coffee.jpg'
    },

    {id: 1004,
    name: 'Bolivia',
    price_per_kg: 12.5,
    description: '',
    kg_in_stock: 2.5,
    roast: 'light',
    image: './coffee.jpg'
    },

    {id: 1005,
    name: 'Brazil Decaf',
    price_per_kg: 10,
    description: '',
    kg_in_stock: 15.20,
    roast: 'dark',
    image: './coffee.jpg'
    },

    {id: 1006,
    name: 'Papua New Guinea',
    price_per_kg: 16,
    description: '',
    kg_in_stock: 2.5,
    roast: 'medium',
    image: './coffee.jpg'
    },
        
    {id: 1007,
    name: 'El Salvador',
    price_per_kg: 12.5,
    description: '',
    kg_in_stock: 4.5,
    roast: 'medium',
    image: './coffee.jpg'
    },

    {id: 1008,
    name: 'Brazil',
    price_per_kg: 9,
    description: '',
    kg_in_stock: 0,
    roast: 'medium',
    image: './coffee.jpg'
    }
    
  ]

  const [products, setProducts] = useState(ProductArray)
  const [basket, setBasket] = useState([])

  return (
    <div className='App'>
      <Router>
        <NavBar basket={basket}></NavBar>
        <Routes>
          <Route path='/' element = {<Products products={products} basket={basket} setBasket={setBasket}/>}/>
          <Route path='/basket' element = {<Basket products={products} basket={basket} setBasket={setBasket}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
