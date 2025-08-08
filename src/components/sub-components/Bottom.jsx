import React from 'react'
import { Link } from 'react-router'


function Bottom({ data, icons, pic }) {
    const { Search } = icons
    const { nav } = data
  return (<>
    <div className="header-bottom flexer h-[60px] contain">
        <Link to={nav[0].path}><img src={pic} alt="image" className='flex-0' /></Link>
        <div className="nav flex flex-2 justify-start px-15 gap-5 list-none font-[400] text-text">
            {nav.map((item, index) => {
                return <Link to={item.path}><li className='cursor-pointer links' id={item.status} key={index}>{item.name}</li></Link>
            })}
        </div>
        <div className="searchbar flex-1 flex">
            <input type="text" placeholder='Search' className='outline-0 border-3 placeholder:text-gray-600 px-5 py-2 rounded-[2px] border-r-0 border-gray-300' />
            <button className='bg-accent text-white text-2xl w-[60px] justify-center flexer rounded-tr-[2px] rounded-br-[2px]'><Search /></button>
        </div>
    </div>  
  </>)
}

export default Bottom