import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import {HashRouter as Router,Switch,Route,Link} from 'react-router-dom';
// import {FacebookIcon, FacebookShareButton} from "react-share"
import Movie from './Components/Movie.js'
import SecQues from './Components/SecQues'

function App() {
    return (
        <div className="App">  
           <div>
           </div>  
          
           <Router> 
             <Link to='/'> Homepage </Link>
             <Link  to='/page'>page2</Link> 

              <Switch>
                 <Route exact path='/' component={()=>{return(<h1>homepage</h1>)}}/>
                 <Route exact path='/page' component={()=>{return(<h1>page 2</h1>)}}/>
             </Switch>         
           </Router> 
          
        </div>
      );
}
export default App;
 

