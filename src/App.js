import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import './App.css';
import image from './images/images.png';
import logo1 from './images/Unknown.png';
import logo2 from './images/UNKNOWN-2.png';
import logo3 from './images/UNKNOWN-3.png';
import logo4 from './images/Unknown-4.png';
import Text from "./bodyText";
import KnowMore from "./know_more";
import Demo from "./chatBox";

function App() {

  return (
      <div className='centre'>
        <head>
        </head>
          <body>
          <header>
              <h1 className='h1'>Trusted by Industry Leading Organisations</h1>
              <div className='img'>
                  <img src={image} className='img-fit' alt = {image}/>
                  <img src={logo1} className='img-fit' alt = {image}/>
                  <img src={logo2} className='img-fit' alt = {image}/>
                  <img src={logo3} className='img-fit' alt = {image}/>
              </div>
          </header>
          <div className='body'>
              <div className='img-border-div'>
                  <img src={logo4} className='img-border' alt = {logo4}/>
              </div>
              <div className='body-text'>
                <div className='body-text-div'>
                    <Router>
                        <Switch>
                            <Route path = '/' exact={true}>
                                <Text />
                            </Route>
                            <Route path = '/know_more'>
                                <KnowMore />
                            </Route>
                        </Switch>
                    </Router>
                </div>
                <Demo />
              </div>
          </div>
          </body>
      </div>
  );
}

export default App;
