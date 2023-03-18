import React from 'react';
import MenuElement from '../menu-element/menu-element';
import {menuData} from '../menu-data/menuData'

const Menu = () => {
  return (
    <div>
      {menuData.map(items=>{
        return <MenuElement {...items}/>
      })}
    </div>
  )
}

export default Menu
