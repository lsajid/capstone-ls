import React from 'react';
import '../Styles/Restaurant.css';
import { Link } from 'react-router-dom';

function Restaurant( {singleRestaurant} ) {

  return (
    <div className='restaurant-container'>
            <Link className='restLink' to={`/restaurant/${singleRestaurant.id}`}>
        <div className='restaurant-data'>
          <div className='image-container'>
          <img className="restaurant-image"  src={singleRestaurant.restaurant_sprites} alt='restaurant stock'/>
          </div>
            <div className='restaurant-name'>
              <div>
                  <h3>{singleRestaurant.name}</h3>
              </div>
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