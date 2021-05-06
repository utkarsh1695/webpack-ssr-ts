import React from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function Home() {
  const history = useHistory();
  const goForward = () => {
    history.push("/about-us")
  }
  
  return (
    <div>
      Home Page
      <div onClick={goForward}>
        {/* <Link to="/about-us">About Us</Link> */}
        About us
       </div>
    </div>
  )
}
