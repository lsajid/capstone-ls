import React from 'react';
import '../Styles/Restaurant.css';
import { Link } from 'react-router-dom';

import restaurantStockImage from '../assets/restaurantStockImage.jpeg';
import restaurantsImage from '../assets/restaurantsImage.jpg';

function Restaurant( {singleRestaurant} ) {


  return (
    <div className='restaurant-container'>
            <Link className='restLink' to={`/restaurant/${singleRestaurant.id}`}>

        <div className='restaurant-data'>
          <img style={{maxHeight:'200px'}} src={restaurantsImage} alt='restaurant stock'/>
            <div className='restaurant-name'>
                <h3>
                  {singleRestaurant.name}
                 </h3>
            </div>
            <div className='restaurant-type'>
                <div>
                  {singleRestaurant.cuisine_type}
                </div>
            </div>
            <div className='restaurant-address'>
                <div>
                  {singleRestaurant.add}
                </div>
            </div>
           
        </div>
        </Link>
    </div>
  )
}

export default Restaurant