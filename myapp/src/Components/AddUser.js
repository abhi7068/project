import React, { Component } from 'react';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addUser } from '../reducer/actions';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      organiserEmail: '',
      type: '',
    };
  }
  onModelChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  addUser = (event) => {
    event.preventDefault();
    console.log(this.state);
    let { dispatch } = this.props;
    dispatch(addUser(this.state));
    this.props.history.push('/adminDashboard');
  };

  render() {
    return (
      <div>
        <div>
          <FormControl >
            <InputLabel htmlFor="name"> Name</InputLabel>
            <Input onChange={this.onModelChange} type="text" name="userName" />
          </FormControl>
        </div>

        <div>
          <FormControl >
            <InputLabel htmlFor="name">User Password</InputLabel>
            <Input
              onChange={this.onModelChange}
              type="password"
              name="password"
            />
          </FormControl>
        </div>
        <div>
          <FormControl >
            <InputLabel htmlFor="name">User Email</InputLabel>
            <Input
              onChange={this.onModelChange}
              type="email"
              name="organiserEmail"
            />
          </FormControl>
        </div>
        <div>
          <FormControl margin="normal">
            <InputLabel id="demo-simple-select-label">Type </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={this.onModelChange}
              name="type"
            >
              <MenuItem value="organiser">Organiser</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Button
          type="button"
          variant="contained"
          color="secondary"
          onClick={this.addUser}
        >
          Add User
        </Button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { state: state };
}

export default withRouter(connect(mapStateToProps)(AddEvent));
