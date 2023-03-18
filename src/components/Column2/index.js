import React from "react";
import "./styles.css";
import Inbox from "./Inbox";
import Msgs from "./Msgs";
import Msgs2 from "./Msgs2";
import Date from "./Date";
import {data} from "./data";
const Column2 = () => {
  return (
    <div className="Column2">
      <Inbox />
      <Msgs />

      {data.map((item, index) => (
       <><Msgs2 {...item} />
         { index %3 ?
           <Date /> :<></>
         } 
       </> 
        
      ))}

   
    
     
    </div>
  );
};
export default Column2;
