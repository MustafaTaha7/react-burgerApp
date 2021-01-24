import React from 'react';
import Navigationitem from './Navigationitem/Navigationitems';
import './Navigationitems.css'
const Navigationitems = (props) => {
    return (  
        <ul className="Navigationitems">
            <Navigationitem link="/" active >Burger Bulider</Navigationitem>
            <Navigationitem link="/">Checkout</Navigationitem>
        </ul>
    );
}
 
export default Navigationitems;