import React from 'react'
import HeaderLogo from '../Assets/Images/logo.svg';
import Currency from '../Assets/Images/currency.svg';
import Flag from '../Assets/Images/flag.svg';
import Bars from '../Assets/Images/bars.svg';
import User from '../Assets/Images/user.svg';
import Search from '../Assets/Images/search.svg';
import Cycle from '../Assets/Images/cycle.svg';
import LocationSm from '../Assets/Images/location3.svg';
import Date from '../Assets/Images/date.svg';

const TopHeader = (props) => {
    return (
        <div className='header  py-4 py-md-5 mb-md-4 mb-2'>
            {/* <div className='container d-none d-lg-flex justify-content-center align-items-center m-auto p-0'> */}
            <div className='row mb-4 d-none d-lg-flex top_header_wrapper justify-content-center align-items-center'>
                <div className='col-lg-2 col-xl-2 col-xxl-auto'>
                    <div className='logo_wrapper'>
                        <img alt="" src={HeaderLogo} />
                    </div>
                </div>
                <div className='col-lg-8 col-xl-8 col-xxl-7 text-center'>
                    <ul className="nav nav-tabs header_tab justify-content-center" id="myTab" role="tablist">
                        <li className="nav-item line_height_20" role="presentation">
                            <button className="nav-link fs_24 fs_24_lg fw_400 active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">All Vehicles</button>
                        </li>
                        <li className="nav-item line_height_20" role="presentation">
                            <button className="nav-link fs_24 fs_24_lg fw_400" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Car</button>
                        </li>
                        <li className="nav-item line_height_20" role="presentation">
                            <button className="nav-link fs_24 fs_24_lg fw_400" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Motorcycle</button>
                        </li>
                        <li className="nav-item line_height_20" role="presentation">
                            <button className="nav-link fs_24 fs_24_lg fw_400" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Van</button>
                        </li>
                    </ul>

                </div>
                <div className='col-lg-2 col-xl-2 col-xxl-auto text-center'>
                    <div className='d-flex justify-content-end'>
                        <div className='d-flex align-items-center me-5 me-lg-2 me-xl-3'>
                            <div className='pr-20 pr-20-lg-contain me-3'>
                                <img src={Currency} />
                            </div>
                            <div className='pr-20 pr-20-lg-contain'>
                                <img src={Flag} />
                            </div>
                        </div>

                        <div className='pill_container d-flex'>
                            <div className='pr-20-contain me-3 '>
                                <img src={User} />
                            </div>
                            <div className='bars_icon'>
                                <img src={Bars} />
                            </div>
                        </div>

                    </div>


                </div>
            </div>
            <div className='row searchbar_wrapper justify-content-lg-center justify-content-between align-items-center d-none d-md-flex mx-0 mx-md-5 mt-4'>
                <div className='col-auto col-md-auto d-block d-lg-none'>
                    <img src={Cycle} />

                </div>
                <div className='col-8 col-md-8 col-lg-7 col-xl-7 col-xxl-6'>
                    <div className='row pill_container align-items-center justify-content-between px-2 py-2'>
                        <div className='col-lg-3 col-3 text-center fs_20 fs_xl_20 fw_600 border-end-gray-100'>
                            <p className='mb-0 d-none d-lg-block'>Enter Location</p>
                            <p className='mb-0 d-lg-none'>Location</p>

                        </div>
                        <div className='col-lg-3 col-3 text-center fs_20 fs_xl_20 fw_600 border-end-gray-100'>
                            <p className='mb-0 d-none d-lg-block'>Pick-up Date</p>
                            <p className='mb-0 d-lg-none'>Pick-up Date</p>

                        </div>
                        <div className='col-lg-3 col-3 text-center fs_20 fs_xl_20 fw_600'>
                            <p className='mb-0 d-none d-lg-block'>Return Date</p>
                            <p className='mb-0 d-lg-none'>Return Date</p>

                        </div>
                        <div className='col-auto text-end pe-0'>
                            <div className='header_search d-flex ms-auto align-items-center'  onClick={() => props.setSearchToggle(false)}>
                                <div className='pr-20'>
                                    <img src={Search} className='me-lg-4' />
                                </div>
                                
                                <p className='mb-0 fs_20 fw_400 line_height_16 d-none d-lg-block'>search</p>


                            </div>
                        </div>

                    </div>
                </div>
                <div className='col-auto col-md-2 d-lg-none'>
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

            <div className='row mx-0 searchbar_wrapper justify-content-lg-center justify-content-between align-items-center d-md-none '>
                <div className='col-12'>
                    <div className='row pill_container align-items-center justify-content-around px-2 py-3 mx-3'>
                        <div className=' col-10 fs_12 fw_600'>
                            <p className='mb-2 search_heading fs_14'>Where do you want to rent a vehicle?</p>
                            <div className='searchbar_sm_list'>
                                <ul className='d-flex align-items-center ps-0 mb-0  fs_12_xsm '>
                                    <li className='pe_1'>
                                        <p className='mb-0'><img src={LocationSm} className='me-2 align-baseline'/>Location</p>
                                    </li>
                                    <li className='pe_1'>
                                        <p className='mb-0'><img src={Date} className='me-2 align-baseline'/>Pick-up Date</p>
                                    </li>
                                    <li className='pe_0'>
                                        <p className='mb-0'><img src={Date} className='me-2 align-baseline'/>Return Date</p>
                                    </li>
                                </ul>

                            </div>

                        </div>
                       
                        <div className='col-auto text-end pe-0'>
                            <div className='header_search d-flex ms-auto align-items-center'>
                                <div className='pr-15-contain' onClick={() => props.setSearchToggle(false)}>
                                    <img src={Search} className='me-lg-4' />
                                </div>
                                
                                <p className='mb-0 fs_20 fw_400 line_height_16 d-none d-lg-block'>search</p>


                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
        </div>

    )
}

export default TopHeader
