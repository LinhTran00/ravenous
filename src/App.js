import React from 'react'
import Business from './Business'
import SearchBar from './SearchBar'
import BusinessList from './BusinessList'

const x = [{
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}, ]

function App() {
  return (
    <div>
     <h1>Ravenous</h1>
     <SearchBar />
     <div>
      <BusinessList businesses={x}/>
     </div>
    </div>
  );
}

export default App;
