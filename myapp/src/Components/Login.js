import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { makingAdmin } from '../reducer/actions';
import { login } from '../reducer/actions';
import { connect } from 'react-redux';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';
import { makeStyles ,useStyles} from '@material-ui/core/styles';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  submit = () => {
    this.props.dispatch(login(this.state));
    if (this.props.userDetails.isAdmin === true) {
      this.props.history.push('/adminDashboard');
    } else if (this.props.users.length > 0) {
      if (
        this.props.users.find(
          (object) =>
            object['organiserEmail'] === this.state.email &&
            object['password'] === this.state.password &&
            object['type'] === 'admin'
        )
      ) {
        console.log('admin');
        this.props.dispatch(makingAdmin());
        this.props.history.push('/adminDashboard');
      } else if (
        this.props.users.find(
          (object) =>
            object['organiserEmail'] === this.state.email &&
            object['password'] === this.state.password &&
            object['type'] === 'organiser'
        )
      ) {
        this.props.history.push(`/OrganiserDashboard/?email:${this.state.email}`);
        console.log('organiser');
      } else {
        console.log('not a valid user');
      }
    } else alert('invalid user');
  };
  render() {
    return (
      <div >
        <FormControl margin="normal">
          <InputLabel htmlFor="email">Email </InputLabel>
          <Input name="email" type="text" onChange={this.handleChange} />
        </FormControl>
        <br/>
        <FormControl margin="normal">
          <InputLabel htmlFor="password">Password </InputLabel>
          <Input name="password" type="password" onChange={this.handleChange} />
        </FormControl>
        <br/>
        <Button
          type="button"
          variant="contained"
          color="secondary"
          onClick={this.submit}
        >
          logi
        </Button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log('hello I am Coming from Login Page', state);
  return { userDetails: state.userDetails, users: state.users.user };
}

export default withRouter(connect(mapStateToProps)(Login));
