// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {orange500, blue500, grey700
} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class MainPage extends Component {
  constructor(){
    super();
    this.state = {
      open:false
    }
  }
  render() {
    //functions
  var forceNavDown = {'top': '72px'};
  var positionTitle = {'top': '-8px', 'left':'-10','background-color':grey700, 'width':'110%', 'height':'73px'};
    return (
      <div>
        <AppBar title="dataset.tools" showMenuIconButton={false} iconClassNameRight="muidocs-icon-navigation-expand-more" style={positionTitle} />
          <br/>
          <Link to="/">To HomePage</Link>
          <p>something here</p>
      <Drawer open={true} containerStyle={forceNavDown}>
        <MenuItem>Projects</MenuItem>
        <MenuItem>Datasets</MenuItem>
        <MenuItem>Upload DataSet</MenuItem>
      </Drawer>

      </div>
    );
  }
}
