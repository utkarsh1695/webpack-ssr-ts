import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutUs() {
  console.log("About Us Page")
  return (
    <div>
      About Us
      <Link to="/home">Home</Link>
    </div>
  )
}
