import React from 'react'
import DummyProduct from '../Assets/Images/dummy_product.png';
import Van from '../Assets/Images/van.svg';
import Light from '../Assets/Images/light.svg';
import LocationIcon from '../Assets/Images/location_icon.svg';
import Star from '../Assets/Images/star.svg';
import Card from './Card';

const Products = () => {
  return (
    <div>
        <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <div className='row mx-0 px-4'>
            <div className='col-md-6 col-lg-4 col-xl-3'><Card /></div>
            <div className='col-md-6 col-lg-4 col-xl-3'><Card /></div>
            <div className='col-md-6 col-lg-4 col-xl-3'><Card /></div>
            <div className='col-md-6 col-lg-4 col-xl-3'><Card /></div>
            <div className='col-md-6 col-lg-4 col-xl-3'><Card /></div>
            <div className='col-md-6 col-lg-4 col-xl-3'><Card /></div>
            <div className='col-md-6 col-lg-4 col-xl-3'><Card /></div>
            <div className='col-md-6 col-lg-4 col-xl-3'><Card /></div>
          </div>
        </div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">.gdgsdldgd..</div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">.hsdhgdlhsd..</div>
        </div>
      
    </div>
  )
}

export default Products
