import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import React, { Component } from 'react';
import App from './App';
import User from './pages/user'
import Bulletin from './pages/bulletin';
import Articles from './pages/articles';
import Admin from './pages/admin';
import Publish from './pages/publish';
import IVideo from './pages/video';

import './css/common.scss'

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Switch>
            <Route path='/maruihua' render={()=>
              <Admin>
                <Route path='/maruihua/publish' component={Publish} />
                <Redirect to="/maruihua/publish" />
              </Admin>
            } />

            <Route path='/' render={()=> 
              <User>
                <Switch>
                  <Route path='/bulletin' component={Bulletin} />
                  <Route path='/video/:id' component={IVideo} />
                  <Route path='/articles/:type' component={Articles} />
                  <Redirect to="/bulletin" />
                </Switch>
              </User>
            } />
          </Switch>
        </App>
      </BrowserRouter>
    );
  }
}

export default Router;