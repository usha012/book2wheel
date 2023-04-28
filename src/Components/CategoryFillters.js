import React from 'react'
import SuperIcon from '../Assets/Images/super_icon.svg';
import NextArrow from '../Assets/Images/next_arrow.svg';
import Booking from '../Assets/Images/booking.svg';
import Location from '../Assets/Images/location.svg';
import Transmission from '../Assets/Images/tranmission.svg';
import Vehicle from '../Assets/Images/vehicle.svg';
import Fuel from '../Assets/Images/fuel.svg';
import FillterIcon from '../Assets/Images/fillter_icon.svg';

export const CategoryFillters = () => {
  return (
    <div className='row mx-0 mb-4 justify-content-center align-items-center'>
        <div className='col-lg-9'>
            <div className='row d-flex align-items-center justify-content-center'>
                <div className='col-lg-11'>
                    <ul className='d-flex mb-0 py-4 align-itens-center justify-content-around category_list'>
                        <li className='me-4 px-3'>
                            <div className='text-center'>
                                <img src={SuperIcon}/>
                                <p className='mb-0 fs_18 fw_400'>Super Owner</p>
                            </div>
                        </li>
                        <li className='me-4 px-3'>
                            <div className='text-center'>
                                <img src={Booking}/>
                                <p className='mb-0 fs_18 fw_400'>Instant Booking</p>
                            </div>
                        </li>
                        <li className='me-4 px-3'>
                            <div className='text-center'>
                                <img src={Location}/>
                                <p className='mb-0 fs_18 fw_400'>Delivery</p>
                            </div>
                        </li>
                        <li className='me-4 px-3'>
                            <div className='text-center'>
                                <img src={Vehicle}/>
                                <p className='mb-0 fs_18 fw_400'>Vehicle Type</p>
                            </div>
                        </li>
                        <li className='me-4 px-3'>
                            <div className='text-center'>
                                <img src={Transmission}/>
                                <p className='mb-0 fs_18 fw_400'>Transmission</p>
                            </div>
                        </li>
                        <li className='me-4 px-3'>
                            <div className='text-center'>
                                <img src={Fuel}/>
                                <p className='mb-0 fs_18 fw_400'>Fuel Type</p>
                            </div>
                        </li>
                        
                        
                    </ul>
                </div>

                <div className='col-lg-1 next_arrow text-end'>
                   <img src={NextArrow}/>
                </div>
            </div>
           
        </div>
        <div className='col-lg-1'>
            <div className='pill_container--fit-content ms-auto'>
                <img src={FillterIcon}/>
            </div>

        </div>

    </div>
  )
}
