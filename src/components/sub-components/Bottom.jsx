import React from 'react'


function Bottom({ data, icons, pic }) {
    console.clear()
    const { Search } = icons
    const { nav } = data
  return (<>
    <div className="header-bottom  justify-between flexer h-[60px] contain">
        <img src={pic} alt="image" />
        <div className="nav flex justify-center gap-5 list-none font-[400] text-text">
            {nav.map((item, index) => {
                return <li className='cursor-pointer links' id={item.status} key={index}>{item.name}</li>
            })}
        </div>
        <div className="searchbar flex">
            <input type="text" placeholder='Search' className='outline-0 border-3 placeholder:text-gray-600 px-5 py-2 rounded-[2px] border-r-0 border-gray-300' />
            <button className='bg-accent text-white text-2xl w-[60px] justify-center flexer rounded-tr-[2px] rounded-br-[2px]'><Search /></button>
        </div>
    </div>  
  </>)
}

export default Bottom