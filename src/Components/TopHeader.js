import React from 'react'
import HeaderLogo from '../Assets/Images/logo.svg'

const TopHeader = () => {
  return (
    <div className='row mx-0'>
        <div className='col-lg-3'>
            <div className='logo_wrapper'>
                <img src={HeaderLogo}/>
            </div>
        </div>
        <div className='col-lg-5'>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
            </li>
            </ul>

        </div>
        <div className='col-lg-4'>

        </div>
      
    </div>
  )
}

export default TopHeader
