import React from 'react'
import Assets from '../assets/asset'

const { Icons } = Assets

class LatestLinkers {
  constructor (name, status) {
    this.name = name;
    this.status = status;
  }
}

const LatestData = {
  title: "Latest Products",
    Btns: [Icons.Cart, Icons.Heart, Icons.GlassMagnify],
  links: [
    new LatestLinkers("New Arrival", "active"),
    new LatestLinkers("Best Seller", "inactive"),
    new LatestLinkers("Featured", "inactive"),
    new LatestLinkers("Special Offer", "inactive"),
  ],
}

const { title, links } = LatestData
function Latest() {
  return (
    <div className='min-h-[100svh] flexer flex-col justify-center'>
        <h1 className='text-5xl text-primary font-bold '>{title}</h1>
        <ul className='flexer gap-15 text-[18px] text-primary'>
            {links.map((item, index) => {
              return <li className='latestLinker cursor-pointer hover:underline' id={item.status} key={index}>{item.name}</li>
            })}
        </ul>
        <div className="itemList">

            <div className="latestItem border-2 h-[280px] w-[350px]"></div>

        </div>
    </div>
  )
}

export default Latest