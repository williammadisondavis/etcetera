import React from 'react';
import ConnectedButton from './addToCartButton.js'


let ProductEntry = props =>
    <div>
        <h3> {props.product.title} </h3>
        <p> {props.product.description} </p>
        <img src={props.product.imageURL} alt='Virus downloading... 99% complete' width='300px' />
        <p> {props.product.description} </p>
        <p> ${props.product.price} </p>
        <ConnectedButton value={props.product.id}/>
        <hr />
    </div>




export default ProductEntry