import React from "react";
import "./styles.css";

const Msgs2 = ({name,msg}) => {
  return (
    <>
      <div className="Msgs">
        <img src="assets/Oval.png"  />
        <div>
          <h2>{name}</h2>
          <p className="Para">
          {msg}
          </p>
        </div>
      </div>
      <hr/>
    </>
  );
};
export default Msgs2;
