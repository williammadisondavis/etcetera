import React from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom'
import HomePageContainer from './components/HomePage.js'
import CategoryScreenContainer from './components/CategoryScreen.js'
import SideBar from './components/SideBar.js'
import Navbar from './components/NavBar.js'

// let About = () => (<h1>This is cool</h1>)

const Router = () => (
    <HashRouter>
        <div>
            <Navbar />
            <SideBar />
            <Switch>
                <Route exact path='/' component={HomePageContainer}/>
                <Route path='/categories/:id' component={CategoryScreenContainer}/>
            </Switch>
        </div>
    </HashRouter>
)
// props.match.params.id
export default Router;