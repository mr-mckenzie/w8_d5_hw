import styled from 'styled-components'
import NavBar from './components/NavBar'
import Products from './containers/Products'
import { useState } from 'react';

function App() {

  const ProductArray = [
    {id: 1000,
    name: 'Kenya',
    price_per_kg: 5.00,
    description: 'Balanced for all brewing methods',
    kg_in_stock: 7.5,
    roast: 'medium',
    image: '?????????????????????'
    },

    {id: 1001,
    name: 'Ethiopia',
    price_per_kg: 4.75,
    description: '',
    kg_in_stock: 12.4,
    roast: 'dark'
    },

    {id: 1002,
    name: 'Costa Rica',
    price_per_kg: 6.50,
    description: '',
    kg_in_stock: 3.25,
    roast: 'medium'
    },

    {id: 1003,
    name: 'Colombia',
    price_per_kg: 5.0,
    description: '',
    kg_in_stock: 1.0,
    roast: 'light'
    },

    {id: 1004,
    name: 'Bolivia',
    price_per_kg: 6.25,
    description: '',
    kg_in_stock: 2.5,
    roast: 'light'
    },

    {id: 1005,
    name: 'Brazil Decaf',
    price_per_kg: 5.0,
    description: '',
    kg_in_stock: 15.20,
    roast: 'dark'
    },

    {id: 1006,
    name: 'Papua New Guinea',
    price_per_kg: 8.00,
    description: '',
    kg_in_stock: 2.5,
    roast: 'medium'
    },
        
    {id: 1007,
    name: 'El Salvador',
    price_per_kg: 6.25,
    description: '',
    kg_in_stock: 4.5,
    roast: 'medium'
    },

    {id: 1008,
    name: 'Brazil',
    price_per_kg: 4.5,
    description: '',
    kg_in_stock: 0,
    roast: 'medium'
    }
    
  ]

  const [products, setProducts] = useState(ProductArray)
  const [basket, setBasket] = useState([])

  return (
    <div className="App">
          <NavBar basket={basket}></NavBar>
          <Products products={products}></Products>
    </div>
  );
}

export default App;
