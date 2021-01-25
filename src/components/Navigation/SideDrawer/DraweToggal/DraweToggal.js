import React from 'react';
import './DraweToggal.css'
const DraweToggal = (props) => {
    return ( 
        <div className="DraweToggal" onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
     );
}
 
export default DraweToggal;