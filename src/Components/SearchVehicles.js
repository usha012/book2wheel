import React, { useState } from 'react'
import SearchBlue from '../Assets/Images/search_blue.svg';
import LocationBlue from '../Assets/Images/loaction_blue.svg';
import Search from '../Assets/Images/search.svg';
import Close from '../Assets/Images/close.svg';

export const SearchVehicles = (props) => {

   const [navActive, setNavActive]= useState(1)

    return (
        <>
            <div className='searchvehicles_wrapper position-relative py-4 px-1'>
                <div className='row mb-4 mx-0'>
                    <div className='col-12'>
                        <div className='pill_gray d-flex justify-content-between px-3 cusor-pointer' onClick={() => props.setSearchToggle(true)}>
                            <div className='pr-15 me-2 '>
                            <img src={Close} className='align-text-bottom '/> 
                            </div>
                            <p className='mb-0 fs_16 fw_400'>Return</p>

                        </div>

                    </div>

                </div>
                <div className='row mx-0 mb-5'>
                    <div className='col-12'>
                        <ul className="nav nav-tabs header_tab justify-content-center" id="myTab" role="tablist">
                            <li className="nav-item line_height_20" role="presentation">
                                <button className={`nav-link  fs_24 fs_24_lg fw_400 mx-3 ${navActive === 1 ? "active" : ""}`} id="home-tab" data-bs-toggle="tab" data-bs-target="#Vehicles" type="button" role="tab" aria-controls="home" aria-selected="true"  onClick={() => setNavActive(1)}>All Vehicles</button>
                            </li>
                            <li className="nav-item line_height_20" role="presentation">
                                <button className={`nav-link  fs_24 fs_24_lg fw_400 mx-3 ${navActive === 2 ? "active" : ""}`} id="profile-tab" data-bs-toggle="tab" data-bs-target="#Car" type="button" role="tab" aria-controls="profile" aria-selected="false"  onClick={() => setNavActive(2)}>Car</button>
                            </li>
                            <li className="nav-item line_height_20" role="presentation">
                                <button className={`nav-link fs_24 fs_24_lg fw_400 mx-3 ${navActive === 3 ? "active" : ""}`} id="contact-tab" data-bs-toggle="tab" data-bs-target="#Motorcycle" type="button" role="tab" aria-controls="contact" aria-selected="false"  onClick={() => setNavActive(3)}>Motorcycle</button>
                            </li>
                            <li className="nav-item line_height_20" role="presentation">
                                <button className={`nav-link  fs_24 fs_24_lg fw_400 mx-3 ${navActive === 4 ? "active" : ""}`} id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false"  onClick={() => setNavActive(4)}>Van</button>
                            </li>
                        </ul>

                    </div>

                </div>
                <div className='row mx-0'>
                    <div className='col-12 text-center'>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="Vehicles" role="tabpanel" aria-labelledby="home-tab">
                                <div className='row mx-0 px-4'>
                                    <div className='col-12 col-lg-4'>
                                        <div class="dropdown search_vehicles_dropdown pill_lg_gray--container mb-5">
                                            <a class="btn dropdown-toggle  fs_22 fs_lg_22 fw_400" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                Enter Pick-up Location
                                            </a>

                                            <ul class="dropdown-menu p-4 fs_20" aria-labelledby="dropdownMenuLink">
                                                <li className='mb-3'>
                                                    <a class="dropdown-item pill_lg_gray--container-gray-300 px-4 py-3 d-flex align-items-start fs_20 fw_400" href="#">
                                                        <div className='pr-20 me-4'>
                                                            <img src={SearchBlue} />
                                                        </div>
                                                        Action
                                                    </a>
                                                </li>
                                                <li className='mb-3'><a class="dropdown-item d-flex align-items-center px-0" href="#">
                                                    <div className='rectangle_box me-4'>
                                                        <div className='pr-20-contain'>
                                                            <img src={LocationBlue} className='align-top' />
                                                        </div>
                                                    </div>Odense</a>
                                                </li>
                                                <li className='mb-3'><a class="dropdown-item d-flex align-items-center px-0" href="#">
                                                    <div className='rectangle_box me-4'>
                                                        <div className='pr-20-contain'>
                                                            <img src={LocationBlue} className='align-top' />
                                                        </div>
                                                    </div>Odense C, Odense</a>
                                                </li>
                                                <li className='mb-3'><a class="dropdown-item d-flex align-items-center px-0" href="#">
                                                    <div className='rectangle_box me-4'>
                                                        <div className='pr-20-contain'>
                                                            <img src={LocationBlue} className='align-top' />
                                                        </div>
                                                    </div>Odense NV, Denmark</a>
                                                </li>
                                                <li className='mb-3'><a class="dropdown-item d-flex align-items-center px-0" href="#">
                                                    <div className='rectangle_box me-4'>
                                                        <div className='pr-20-contain'>
                                                            <img src={LocationBlue} className='align-top' />
                                                        </div>
                                                    </div>Odessa, Ukraina</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-4'>
                                        <div class="dropdown search_vehicles_dropdown pill_lg_gray--container  mb-5">
                                            <a class="btn dropdown-toggle fs_22 fs_lg_22 fw_400" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                Enter Pick-up Location
                                            </a>

                                            <ul class="dropdown-menu p-4 fs_20" aria-labelledby="dropdownMenuLink">
                                                <li className='mb-3'>
                                                    <a class="dropdown-item pill_lg_gray--container-gray-300 px-4 py-3 d-flex align-items-start fs_20 fw_400" href="#">
                                                        <div className='pr-20 me-4'>
                                                            <img src={SearchBlue} />
                                                        </div>
                                                        Action
                                                    </a>
                                                </li>
                                                <li className='mb-3'><a class="dropdown-item d-flex align-items-center px-0" href="#">
                                                    <div className='rectangle_box me-4'>
                                                        <div className='pr-20-contain'>
                                                            <img src={LocationBlue} className='align-top' />
                                                        </div>
                                                    </div>Odense</a>
                                                </li>
                                                <li className='mb-3'><a class="dropdown-item d-flex align-items-center px-0" href="#">
                                                    <div className='rectangle_box me-4'>
                                                        <div className='pr-20-contain'>
                                                            <img src={LocationBlue} className='align-top' />
                                                        </div>
                                                    </div>Odense C, Odense</a>
                                                </li>
                                                <li className='mb-3'><a class="dropdown-item d-flex align-items-center px-0" href="#">
                                                    <div className='rectangle_box me-4'>
                                                        <div className='pr-20-contain'>
                                                            <img src={LocationBlue} className='align-top' />
                                                        </div>
                                                    </div>Odense NV, Denmark</a>
                                                </li>
                                                <li className='mb-3'><a class="dropdown-item d-flex align-items-center px-0" href="#">
                                                    <div className='rectangle_box me-4'>
                                                        <div className='pr-20-contain'>
                                                            <img src={LocationBlue} className='align-top' />
                                                        </div>
                                                    </div>Odessa, Ukraina</a>
                                                </li>


                                            </ul>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-4'>

                                        <div class="dropdown search_vehicles_dropdown pill_lg_gray--container  mb-5">
                                            <a class="btn dropdown-toggle fs_22 fs_lg_22 fw_400" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                Enter Pick-up Location
                                            </a>

                                            <ul class="dropdown-menu p-4 fs_20" aria-labelledby="dropdownMenuLink">
                                                <li className='mb-3'>
                                                    <a class="dropdown-item pill_lg_gray--container-gray-300 px-4 py-3 d-flex align-items-start fs_20 fw_400" href="#">
                                                        <div className='pr-20 me-4'>
                                                            <img src={SearchBlue} />
                                                        </div>
                                                        Action
                                                    </a>
                                                </li>
                                                <li className='mb-3'><a class="dropdown-item d-flex align-items-center px-0" href="#">
                                                    <div className='rectangle_box me-4'>
                                                        <div className='pr-20-contain'>
                                                            <img src={LocationBlue} className='align-top' />
                                                        </div>
                                                    </div>Odense</a>
                                                </li>
                                                <li className='mb-3'><a class="dropdown-item d-flex align-items-center px-0" href="#">
                                                    <div className='rectangle_box me-4'>
                                                        <div className='pr-20-contain'>
                                                            <img src={LocationBlue} className='align-top' />
                                                        </div>
                                                    </div>Odense C, Odense</a>
                                                </li>
                                                <li className='mb-3'><a class="dropdown-item d-flex align-items-center px-0" href="#">
                                                    <div className='rectangle_box me-4'>
                                                        <div className='pr-20-contain'>
                                                            <img src={LocationBlue} className='align-top' />
                                                        </div>
                                                    </div>Odense NV, Denmark</a>
                                                </li>
                                                <li className='mb-3'><a class="dropdown-item d-flex align-items-center px-0" href="#">
                                                    <div className='rectangle_box me-4'>
                                                        <div className='pr-20-contain'>
                                                            <img src={LocationBlue} className='align-top' />
                                                        </div>
                                                    </div>Odessa, Ukraina</a>
                                                </li>


                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="tab-pane fade" id="Car" role="tabpanel" aria-labelledby="profile-tab">

                            </div>
                            <div class="tab-pane fade" id="Motorcycle" role="tabpanel" aria-labelledby="contact-tab">.hsdhgdlhsd..</div>
                            <div class="tab-pane fade" id="Van" role="tabpanel" aria-labelledby="contact-tab">.hsdhgdlhsd..</div>
                        </div>

                    </div>
                </div>

                <div className='row mx-0 fw_400 justify-content-around align-items-center mb_footer_wrapper py-3 position-fixed bottom-0 end-0 start-0 d-md-none'>


                    <div className='col-3 clear text-center'>
                        <p className='mb-0 text-decoration-underline fs_20'>Clear All</p>
                    </div>
                    <div className='col-3 footer_icon text-center'>
                        <div className='header_search d-flex ms-auto align-items-center'>
                            <div className='pr-20 me-2'>
                                <img src={Search} className='me-lg-4 align-top' />
                            </div>

                            <p className='mb-0 fs_20 fw_400 line_height_16 '>search</p>


                        </div>
                    </div>



                </div>
            </div>
        </>

    )
}
