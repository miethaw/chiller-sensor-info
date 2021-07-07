import React, { Component } from 'react';
import './App.css';

import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { withTheme } from './features/common/hoc/withTheme'
import Navbar from './features/common/components/Navbar';
import VibrationInfoScreen from './screens/VibrationInfoScreen';
import GeneralInfoScreen from './screens/GeneralInfoScreen';
import { Switch, Route, Redirect, withRouter,useParams } from 'react-router-dom'


import moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
   
    }
  }
 
  componentDidMount() {
   
  }

  render() {
    const {  } = this.state
    const { theme } = this.props
    const pathname = this.props.history.location.pathname
   return (
      <div className="d-flex flex-column" style={{
        background: theme === "dark" ? "linear-gradient(-60deg, #101841,#202B60)" : theme === "light" ? "linear-gradient(-60deg,#e6e8eA,#F6F8FA)" : null
      }}>
      
            <div className="p-2">
             
              <Navbar
                history={this.props.history}
              />
            </div>
        <div className="flex-grow-1" >
          <Switch>
           
            <Route path="/vibration-info" component={VibrationInfoScreen} />
            <Route path="/general-info" component={GeneralInfoScreen} />
            
            <Redirect to="/vibration-info" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withTheme(withRouter(App));
