import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter as Router,Route,Link,NavLink,Switch, Routes} from 'react-router-dom';
import Home from './home';
import About from './About';
import Join from './Joinus';
import Joinus from './Joinus';
ReactDOM.render(<Home/>,document.getElementById("root"));
ReactDOM.render(<About/>,document.getElementById("root"));
ReactDOM.render(<Joinus/>,document.getElementById("root"));
const routing = (
     <Router>
        <div>
            <Routes>
               <Route path='/' Component={Home}/>
                <Route path='/a' Component={About}/>
                <Route path='/j' Component={Join}/>

            </Routes>
        </div>
     </Router>
)
ReactDOM.render(routing,document.getElementById('root'));
