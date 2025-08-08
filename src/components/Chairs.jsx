import React from 'react'
import Assets from '../assets/asset'

const { ChairsData } = Assets

const { Btns, ITEMS, colours, } = ChairsData


function Chairs() {
  return (<>
    <div className="chairs relative flexer justify-center gap-[20px] mt-[180px] pb-[100px]">

        {ITEMS.map(Item => {
            const data = Item
            return <div className="chairsItem min-h-[330px] cursor-pointer overflow-hidden w-[260px] relative rounded-tr-2xl rounded-tl-2xl shadow-xl">
                        <div className="btns absolute z-1 top-2 left-[20px] flexer gap-3 text-xl">
                            {Btns.map(Item => {
                                return <button className='flexer'><Item /></button>
                            })}
                        </div>

                        <div className="holder relative bg-[#eeeeeeab] h-[250px] flexer justify-center py-5 pt-8">
                            <img src={data.img} alt="image" className='h-[80%] w-[80%] object-contain' />
                            <button className="absolute bottom-2 viewBtn">View Details</button>
                        </div>

                        <div className="details font-[500] flexer flex-col gap-4 py-5">
                            <div className="itemName">{data.name}</div>
                            <ul className='flexer gap-2'>
                                {colours.map((color, index) => {
                                    return <li key={index} className={color}></li>
                                })}
                            </ul>
                            <div className="code">Code: {data.code}</div>
                            <div className="price">${data.price}</div>
                        </div>
                    </div>
        })}

        <div className="toggler list-none flexer gap-3 absolute bottom-[40px]">
            {ITEMS.map((Item, index) => {
                return <li className="chairsToggler" key={index} id={Item.stats}></li>
            })}
        </div>
        
    </div>
  </>)
}

export default Chairs



// {
//         img: Home_Top1,
//         name: "Cantilever chair",
//         colours: [
//             "bg-green-300 w-4 h-[4px] rounded",
//             "bg-accent w-4 h-[4px] rounded",
//             "w-4 h-[4px] rounded change"
//         ],
//         code: "Y523201",
//         price: "42.00"
//     }