import React from 'react';
import {connect} from 'react-redux';
import SideBar from './SideBar.js'
import Navbar from './NavBar.js'
// import ProductPage from './ProductPage'
let HomePage = (props) => {
    // console.log(props)
    return( 
    <div>
        <Navbar />
        <SideBar />
        {/* <ProductPage /> */}
    </div>
    )
}
let HomePageContainer = connect(state=>state)(HomePage)
export default HomePageContainer;