// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import styles from './Home.css';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
// import muiThemeable from 'material-ui/styles/muiThemeable';

export default class Home extends Component {
  constructor(){
    super();

    this.state = {
      fireRedirect:false
    }
  }

  redir = () => {
    var at = document.getElementById('submit').value
    console.log('at',at);

    this.setState({fireRedirect:true})
  }


  render() {
    // <Link to="/counter">to Counter</Link>
    var getFiles = function(){
      axios.get('8080/getdata')
      .then((data) => {
        console.log('Yeah')
      })
      .catch (function (error){
        console.log(error)
      })
      console.log('in getFiles function')
    }

    // const styles = {
    //   hintStyle: {
    //     color: ,
    //   }
    // };


    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>dataset.tools</h2>
          <br/>
          {/* <Link to="/mainpage">to MainPage</Link> */}
          <TextField hintText="Hint Text" id="submit" />
          {/* <input id="submit" placeholder="Access Token here"></input> */}
          <RaisedButton onClick={this.redir.bind(this)} label="Submit" />
          {this.state.fireRedirect && (
            <Redirect to ={'/mainpage'}/>
          )}
          <br/>

          {/* <a  href="http://localhost:8080/authorize">Click here to sign in with data.world!!</a> */}
          {/* <button onClick = {() => getFiles()}>Get files</button> */}
        </div>
      </div>
    );
  }
}
