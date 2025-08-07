import React from 'react'

function Top({ data, icons }) {
    const { mail, contact, nav } = data
    const { Mail, Phone, Person, Heart, Cart } = icons

  return ( <>
    <div className='header-top flexer justify-between h-[50px] contain text-[15px]'>
        <div className="contact-section flexer gap-7">
            <div className="mail flexer gap-3 font-[500]">
                <Mail />
                {mail}
            </div>
            <div className="contact gap-3 flexer font-[800]">
                <Phone />
                {contact}
            </div>
        </div>

        <div className="nav h-[100%] flex font-[600]">
            {nav.map((item, index) => {
                return <select className='px-4' key={index} value={item[0]}>
                    {item.map((item, index) => {
                        return <option value={item} key={index}>{item}</option>
                    })}
                </select>
            })}
            <button className="login flexer cursor-pointer px-4 gap-2 hover:text-accent hover:scale-[0.9]">Login <Person /></button>
            <button className="wishList flexer cursor-pointer px-4 gap-2 hover:text-accent hover:scale-[0.9]">Wishlist <Heart /></button>
            <button className="cart w-[60px] flexer cursor-pointer justify-center text-[20px] hover:bg-accent"><Cart /></button>
        </div>
    </div>
  </> )
}

export default Top