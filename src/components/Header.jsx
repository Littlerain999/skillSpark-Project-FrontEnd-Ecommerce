import React from 'react'
import DataBase from '../assets/asset'
import Top from './sub-components/Top'
import Bottom from './sub-components/Bottom'

const { Logo, HeaderData, Icons } = DataBase

function Header() {
  return (
    <div>
        <div className="fixer bg-background text-white">
            <Top data={HeaderData.top} icons={Icons} />
        </div>
        <div className="fixer bg-white">
            <Bottom data={HeaderData.bottom} icons={Icons} pic={Logo} />
        </div>
    </div>
  )
}

export default Header