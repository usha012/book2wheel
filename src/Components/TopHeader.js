import React from 'react'
import HeaderLogo from '../Assets/Images/logo.svg';
import Currency from '../Assets/Images/currency.svg';
import Flag from '../Assets/Images/flag.svg';
import Bars from '../Assets/Images/bars.svg';
import User from '../Assets/Images/user.svg';
import Search from '../Assets/Images/search.svg';
import Cycle from '../Assets/Images/cycle.svg';

const TopHeader = () => {
    return (
        <div className='header py-5'>
            <div className='row mb-4 mx-0 d-none d-lg-flex top_header_wrapper justify-content-center align-items-center'>
                <div className='col-lg-2'>
                    <div className='logo_wrapper'>
                        <img alt="" src={HeaderLogo} />
                    </div>
                </div>
                <div className='col-lg-6 text-center'>
                    <ul className="nav nav-tabs header_tab justify-content-center" id="myTab" role="tablist">
                        <li className="nav-item line_height_20" role="presentation">
                            <button className="nav-link fs_24 fw_400 active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">All Vehicles</button>
                        </li>
                        <li className="nav-item line_height_20" role="presentation">
                            <button className="nav-link fs_24 fw_400" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Car</button>
                        </li>
                        <li className="nav-item line_height_20" role="presentation">
                            <button className="nav-link fs_24 fw_400" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Motorcycle</button>
                        </li>
                        <li className="nav-item line_height_20" role="presentation">
                            <button className="nav-link fs_24 fw_400" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Van</button>
                        </li>
                    </ul>

                </div>
                <div className='col-lg-2 text-center'>
                    <div className='d-flex justify-content-end'>
                        <div className='d-flex align-items-center me-5'>
                            <div className='pr-20 me-3'>
                                <img src={Currency} />
                            </div>
                            <div className='pr-20'>
                                <img src={Flag} />
                            </div>
                        </div>

                        <div className='pill_container d-flex'>
                            <div className='pr-20 me-3'>
                                <img src={User} />
                            </div>
                            <div className='bars_icon'>
                                <img src={Bars} />
                            </div>
                        </div>

                    </div>


                </div>
            </div>
            <div className='row searchbar_wrapper justify-content-center justify-content-md-between align-items-center mx-0 mx-md-5'>
                <div className='col-md-auto'>
                    <img src={Cycle} />

                </div>
                <div className='col-lg-6 col-md-8'>
                    <div className='row pill_container align-items-center justify-content-between px-3 py-2'>
                        <div className='col-lg-3 col-3 text-center fs_20 fw_600 border-end-gray-100'>
                            <p className='mb-0 d-none d-lg-block'>Enter Location</p>
                            <p className='mb-0 d-lg-none'>Location</p>

                        </div>
                        <div className='col-lg-3 col-3 text-center fs_20 fw_600 border-end-gray-100'>
                            <p className='mb-0 d-none d-lg-block'>Pick-up Date</p>
                            <p className='mb-0 d-lg-none'>Pick-up Date</p>

                        </div>
                        <div className='col-lg-3 col-3 text-center fs_20 fw_600'>
                            <p className='mb-0 d-none d-lg-block'>Return Date</p>
                            <p className='mb-0 '>Return Date</p>

                        </div>
                        <div className='col-lg- col-auto text-end pe-0'>
                            <div className='header_search d-flex ms-auto align-items-center'>
                                <div className='pr-20'>
                                    <img src={Search} className='me-lg-4' />
                                </div>
                                
                                <p className='mb-0 fs_20 fw_400 line_height_16 d-none d-lg-block'>search</p>


                            </div>
                        </div>

                    </div>
                </div>
                <div className='col-md-2'>
                    <div className='pill_container d-flex align-items-center justify-content-center'>
                        <div className='pr-30 me-3'>
                            <img src={User} />
                        </div>
                        <div className='bars_icon'>
                            <img src={Bars} />
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default TopHeader
