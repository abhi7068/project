import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { login } from '../reducer/actions';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


class OrganiserDashboard extends Component {
  render() {
  
    return (
      <div>
       
          <Link to="/Organiser">
          <Button variant="contained" color="secondary">
        add event
      </Button>
         
           
          </Link>
          <Link  to="/OrganiserList">
          <Button variant="contained" color="secondary">
         list
      </Button>
          
          </Link>
      
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log('hello', state);
  return { state: state };
}

export default connect(mapStateToProps)(OrganiserDashboard);
