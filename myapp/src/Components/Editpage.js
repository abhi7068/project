import React, { Component } from 'react';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { update } from '../reducer/actions';

class Editpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: this.props.temp.eventName,
      eventDescription: this.props.temp.eventDescription,
      organiserEmail:this.props.temp.organiserEmail ,
    };
  }
  onModelChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  Update = (event) => {
    event.preventDefault();
    console.log('coming from edit');
    let { dispatch } = this.props;
    dispatch(update(this.state, this.props.keying));
    this.props.history.push('/adminDashboard');
  };
  render() {
    return (
      <div>
        <div>
          <div>
            <FormControl  >
              <InputLabel htmlFor="name">Event</InputLabel>
              <Input
                onChange={this.onModelChange}
                defaultValue={this.state.eventName}
                type="text"
                name="eventName"
              />
            </FormControl>
          </div>
          <div>
            <FormControl margin="normal" >
              <InputLabel htmlFor="name">Event Description</InputLabel>
              <Input
                onChange={this.onModelChange}
                defaultValue={this.state.eventDescription}
                type="text"
                name="eventDescription"
              />
            </FormControl>
          </div>
          <div>
            <FormControl margin="normal">
              <InputLabel htmlFor="name">Organiser Email</InputLabel>
              <Input
                defaultValue={this.state.organiserEmail}
                onChange={this.onModelChange}
                type="text"
                name="organiserEmail"
              />
            </FormControl>
          </div>
          <Button
            type="button"
            variant="contained"
            color="secondary"
            onClick={this.Update}
          >
            Update
          </Button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { state: state };
}

export default connect(mapStateToProps)(Editpage);
