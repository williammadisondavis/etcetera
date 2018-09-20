import React from 'react';
import { connect } from 'react-redux'
import ProductEntry from './ProductPage'

let mapStateToProps = (state) => {
    console.log(state);
    return {products: state.products};
}


let CategoryScreen = (props) => {
    console.log([props.products]);
    console.log(props.match.params.id);
    return (
        <div>
            <h2> {props.match.params.id} </h2>
            {props.products.map(product => 
            <ProductEntry product={product} key={product.id} />
            )}
        </div>
    )
}



let CategoryScreenContainer = connect(mapStateToProps)(CategoryScreen)

export default CategoryScreenContainer;