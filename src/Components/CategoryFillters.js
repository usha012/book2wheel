import React from 'react'
import SuperIcon from '../Assets/Images/super_icon.svg';
import NextArrow from '../Assets/Images/next_arrow.svg';
import Booking from '../Assets/Images/booking.svg';
import Location from '../Assets/Images/location.svg';
import Transmission from '../Assets/Images/tranmission.svg';
import Vehicle from '../Assets/Images/vehicle.svg';
import Fuel from '../Assets/Images/fuel.svg';
import FillterIcon from '../Assets/Images/fillter_icon.svg';
import PreviousArrow from '../Assets/Images/previous_arrow.svg';
import OpenBox from '../Assets/Images/open_box.svg';
import Car from '../Assets/Images/car.svg';
import Motorcycle from '../Assets/Images/motorcycle.svg';
import Filter from '../Assets/Images/filter.svg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const responsive = {
    0:{items:4},
    1000:{items:6}
}
const navText = [`<div class="pr-30-contain pr-30-md-contain pr-30-sm-contain"><img class='category_icon d-lg-none' src=${PreviousArrow}/></div>`, `<div class="pr-30-contain pr-30-md-contain pr-30-sm-contain"><img class='category_icon' src="http://54.254.22.6:3005/static/media/next_arrow.21e07bc2c34556f1acc80efdc1652740.svg"/></div>`]

export const CategoryFillters = () => {
  return (
    <>
      <div className="row mx-1 mx-md-5 mx-lg-5 mb-4 d-none d-md-flex justify-content-between justify-content-md-center justify-content-lg-between  justify-content-xl-center align-items-center">
        <div className="col-10 col-md-10 col-lg-10 col-xl-9 col-xxl-8 mt-4">
          <OwlCarousel
            className="owl-theme category_carousel position-relative px-5 ps-lg-0"
            loop
            margin={10}
            nav={true}
            navText={navText}
            dots={false}
            responsive={responsive}
          >
            <div class="item">
              <div className="text-center">
                <div className="pr-40-contain pr-40-md-contain mx-auto">
                  <img className="" src={SuperIcon} />
                </div>
                <p className="mb-0 fs_16 fs_xl_18  fw_400">Super Owner</p>
              </div>
            </div>
            <div class="item">
              <div className="text-center">
                <div className="pr-40-contain pr-40-md-contain mx-auto">
                  <img className="" src={Booking} />
                </div>
                <p className="mb-0 fs_16 fs_xl_18 fw_400">Instant Booking</p>
              </div>
            </div>
            <div class="item">
              <div className="text-center">
                <div className="pr-40-contain pr-40-md-contain mx-auto">
                  <img className="" src={Location} />
                </div>
                <p className="mb-0 fs_16 fs_xl_18 fw_400">Delivery</p>
              </div>
            </div>
            <div class="item">
              <div className="text-center">
                <div className="pr-40-contain pr-40-md-contain mx-auto">
                  <img className="" src={Vehicle} />
                </div>
                <p className="mb-0 fs_16 fs_xl_18 fw_400">Vehicle Type</p>
              </div>
            </div>
            <div class="item">
              <div className="text-center">
                <div className="pr-40-contain pr-40-md-contain mx-auto">
                  <img className="" src={Transmission} />
                </div>
                <p className="mb-0 fs_16 fs_xl_18 fw_400">Transmission</p>
              </div>
            </div>
            <div class="item">
              <div className="text-center">
                <div className="pr-40-contain pr-40-md-contain mx-auto">
                  <img className="" src={Fuel} />
                </div>
                <p className="mb-0 fs_16 fs_xl_18 fw_400">Fuel Type</p>
              </div>
            </div>
          </OwlCarousel>
        </div>

       
        <div className="col-auto col-md-1 col-lg-1 col-xl-1 col-xxl-auto">
          <div className="pill_container--fit-content ms-auto">
            <div className='pr-30 pr-30-md'>
                <img src={FillterIcon} />
            </div>
          </div>
        </div>
      </div>

      <div className="row mx-1 mx-md-5 mb-4 d-md-none justify-content-between justify-content-md-center align-items-center">
        <div className="col-12">
            <OwlCarousel
                className="owl-theme category_carousel position-relative px-5"
                loop
                margin={10}
                nav={true}
                navText={navText}
                dots={false}
                responsive={responsive}
            >
                <div class="item">
                <div className="text-center">
                    <div className="pr-40-contain pr-40-md-contain mx-auto">
                    <img className="" src={OpenBox} />
                    </div>
                    <p className="mb-0 fs_16 fs_xl_18  fw_400">All Vehicles</p>
                </div>
                </div>
                <div class="item">
                <div className="text-center">
                    <div className="pr-40-contain pr-40-md-contain mx-auto">
                    <img className="" src={Car} />
                    </div>
                    <p className="mb-0 fs_16 fs_xl_18 fw_400">Car</p>
                </div>
                </div>
                <div class="item">
                <div className="text-center">
                    <div className="pr-40-contain pr-40-md-contain mx-auto">
                    <img className="" src={Motorcycle} />
                    </div>
                    <p className="mb-0 fs_16 fs_xl_18 fw_400">Motorcycle</p>
                </div>
                </div>
                <div class="item">
                <div className="text-center">
                    <div className="pr-40-contain pr-40-md-contain mx-auto">
                    <img className="" src={Filter} />
                    </div>
                    <p className="mb-0 fs_16 fs_xl_18 fw_400">Filters</p>
                </div>
                </div>
               
            </OwlCarousel>
            </div>
      </div>
    </>
  );
}
