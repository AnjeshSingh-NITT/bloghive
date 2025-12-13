import React from 'react'
import logo from '../assets/bloghive-logo.png'

function Logo({ width = '100px' }) {
  return (
    <img
      src={logo}
      alt="BlogHive logo"
      style={{ width }}
      className="select-none"
    />
  )
}

export default Logo
