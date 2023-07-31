import React, {Component} from 'react';
import sh from './components/image/sh.jpg';
import App from './App.css';
//import ReactDOM from 'react-dom';

//import './App.css';
class Home extends Component{
    render()
    {
        return(
            <div>
                <h1 style={{color:'purple',textAlign:'center'}}>Shop With Us</h1>
                <h1>Great Deal Offer</h1>
                <img className='k' src={sh}></img>

            </div>
        )
    }
}
export default Home;
