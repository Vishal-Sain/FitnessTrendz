import React from 'react'
// import BackImage from '../Assets/image5.jpg'
// import Logo from '../Assets/logo.jpg'

export default function Navbar() {
  return (
    <>
    <nav className='nav'>
        {/* <img className='imgLogo' src={Logo} alt="" /> */}
    <a href="/" className='site-title'>Fitness Trendz</a>
    <ul>
        <li className='active' ><a href="/home">Home</a></li>
        <li className='active' ><a href="/theworkout">The Workout</a></li>
        <li><a href="/trainers">Trainers</a></li>
        <li><a href="/membership">Membership</a></li>
        <li><a href="/aboutus">About Us</a></li>
    </ul>
    </nav>   
    {/* <img className='bgImg' src={BackImage} alt="" /> */}
    
    </>
  )
}
