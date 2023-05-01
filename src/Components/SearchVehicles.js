import React from 'react'

export const SearchVehicles = () => {

    return (
        <>
            <div className='searchvehicles_wrapper'>
                <div className='row mb-4'>
                    <div className='col-12'>
                        <div className='pill_gray'>
                            <p className='mb-0'>Return</p>

                        </div>

                    </div>

                </div>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <ul className="nav nav-tabs header_tab justify-content-center" id="myTab" role="tablist">
                            <li className="nav-item line_height_20" role="presentation">
                                <button className="nav-link fs_24 fs_24_lg fw_400 active" id="home-tab" data-bs-toggle="tab" data-bs-target="#Vehicles" type="button" role="tab" aria-controls="home" aria-selected="true">All Vehicles</button>
                            </li>
                            <li className="nav-item line_height_20" role="presentation">
                                <button className="nav-link fs_24 fs_24_lg fw_400" id="profile-tab" data-bs-toggle="tab" data-bs-target="#Car" type="button" role="tab" aria-controls="profile" aria-selected="false">Car</button>
                            </li>
                            <li className="nav-item line_height_20" role="presentation">
                                <button className="nav-link fs_24 fs_24_lg fw_400" id="contact-tab" data-bs-toggle="tab" data-bs-target="#Motorcycle" type="button" role="tab" aria-controls="contact" aria-selected="false">Motorcycle</button>
                            </li>
                            <li className="nav-item line_height_20" role="presentation">
                                <button className="nav-link fs_24 fs_24_lg fw_400" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Van</button>
                            </li>
                        </ul>

                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="Vehicles" role="tabpanel" aria-labelledby="home-tab">
                                <div className='row mx-0 px-4'>
                                    <div className='col-12'>
                                        <div class="dropdown search_vehicles_dropdown pill_lg_gray--container mb-3">
                                            <a class="btn dropdown-toggle  fs_22 fw_400" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                Enter Pick-up Location
                                            </a>

                                            <ul class="dropdown-menu p-4" aria-labelledby="dropdownMenuLink">
                                                <li><a class="dropdown-item pill_lg_gray--container px-2 py-3" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>

                                        <div class="dropdown search_vehicles_dropdown mb-3">
                                            <a class="btn dropdown-toggle pill_lg_gray fs_22 fw_400" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                Enter Pick-up Location
                                            </a>

                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>

                                        <div class="dropdown search_vehicles_dropdown mb-3">
                                            <a class="btn dropdown-toggle pill_lg_gray fs_22 fw_400" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                Enter Pick-up Location
                                            </a>

                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><a class="dropdown-item pill_lg_gray" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
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
            </div>
        </>

    )
}
