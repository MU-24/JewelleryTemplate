import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        <div className=' flex  items-center mt-6 ml-8 font-bold text-xl border-b-2 '>
            <Link to="/backpack" className='border p-4'>BackPack</Link>
        </div>
        
    </div>
  )
}

export default Navbar