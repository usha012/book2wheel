import React from 'react'
import DummyProduct from '../Assets/Images/dummy_product.png';
import Van from '../Assets/Images/van.svg';
import Light from '../Assets/Images/light.svg';
import LocationIcon from '../Assets/Images/location_icon.svg';
import Star from '../Assets/Images/star.svg';
import Map from '../Assets/Images/map.svg';
import SearchOutline from '../Assets/Images/search_outline.svg';
import SearchOutlineGray from '../Assets/Images/search_outline_gray.svg';
import UserOutline from '../Assets/Images/user_outline.svg';
import GrayBars from '../Assets/Images/gray_bars.svg';
import Dots from '../Assets/Images/dots.svg';


import Card from './Card';

const Products = () => {
  return (
    <div className='position-relative'>
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

      <div className='view_map_pill  position-fixed px-4 py-2 '>
        <p className='mb-0 fs_18'>View map <img src={Map} className='ms-3' /></p>

      </div>

      <div className='row mx-0 fs_13 fw_400 justify-content-center align-items-center mb_footer_wrapper py-3 position-fixed bottom-0 end-0 start-0 d-md-none'>

        <div className='col-3 footer_icon footer_icon_active text-center'>
          <div className='pr-20 mx-auto'>
            <img src={SearchOutline} className='active_icon d-none' />
            <img src={SearchOutlineGray} className='icon' />
          </div>
          <p className='mb-0'>Explore</p>
        </div>
        <div className='col-3 footer_icon text-center'>
          <div className='pr-20 mx-auto'>
            <img src={UserOutline} />
          </div>
          <p className='mb-0'>Sign-up</p>

        </div>
        <div className='col-3 footer_icon text-center'>
          <div className='pr-20 mx-auto'>
            <img src={GrayBars} />
          </div>
          <div className='pr-20 mx-auto d-none'>
            <img src={Dots} />
          </div>
          <p className='mb-0'>Menu</p>

        </div>



      </div>

    </div>
  )
}

export default Products
