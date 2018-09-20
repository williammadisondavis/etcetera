import React from 'react';
import {connect} from 'react-redux';

let AddToCart = (props) => {
    console.log(props.value);
    return(
        <button value={props.value}
        onClick={
            ()=>props.dispatch({type:'ADD_TO_CART', id: props.value})}> 
        Add To Cart
        </button>

    )
}

let ConnectedButton = connect()(AddToCart)
export default ConnectedButton