import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
    <ul className="flex justify-end space-x-4">
      <li>
        <a href="/" className="text-white">Home</a>
      </li>
      <li>
        <a href="/" className="text-white">About</a>
      </li>
      <li>
        <a href="/" className="text-white">Services</a>
      </li>
      <li>
        <a href="/" className="text-white">Contact</a>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar
