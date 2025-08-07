import React from 'react'
import Assets from '../assets/asset'

const { Images } = Assets

const { Home_Top1 } = Images

function Chairs() {
  return (<>
    <div className="chairs min-h-[100svh]">
        <div className="list flex justify-center items-center">
            <div className="item border-2 min-h-[350px] min-w-[280px]">
                <div className="icons"></div>
                <img src={Home_Top1} alt="image" />
                <button className="viewDetails-btn">View Details</button>
                <div className="details">
                    <div className="name">Cantilever Chair</div>
                    <div className="colors">
                        <li></li>
                        <li></li>
                        <li></li>
                    </div>
                    <div className="code">Code: Y523201</div>
                    <div className="price">$42.00</div>
                </div>
            </div>
        </div>
    </div>
  </>)
}

export default Chairs