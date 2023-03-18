import React from 'react';
import "./panel-icons.css";
import PanelElement from '../panelElement/panel-element';
import { panelData } from '../menu-data/menuData';

const PanelIcons = ({icon}) => {
  return (
    <div className='panel-icons'>
      {/* <a href='#'><img src={icon}/></a> */}
    {panelData.map(items=>{
      return<PanelElement {...items}/>
    })}
    
    </div>
  ) 
}

export default PanelIcons
