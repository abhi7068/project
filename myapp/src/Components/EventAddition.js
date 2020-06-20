import React, { Component } from 'react';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { addEvent } from '../reducer/actions';
class EventAddition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UniqueId: '',
      eventName: '',
      eventDescription: '',
      organiserEmail: '',
    
    };
  }
  handleChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onSubmit = (event) => {
    this.setState(
      {
        UniqueId: Date.now(),
      // myid:Date.now(),
      },
      () => {
        event.preventDefault();
        let { dispatch } = this.props;
        dispatch(addEvent(this.state));
        this.props.history.push('/adminDashboard');
      }
    );
  };

  render() {
    return (
      <div>
        <div>
          <FormControl  >
            <InputLabel htmlFor="name">nameOfEvent</InputLabel>
            <Input onChange={this.handleChange} type="text" name="eventName" />
          </FormControl>
        </div>

        <div>
          <FormControl margin="normal" >
            <InputLabel htmlFor="name">description</InputLabel>
            <Input
              onChange={this.handleChange}
              type="text"
              name="eventDescription"
            />
          </FormControl>
        </div>
        <div>
          <FormControl margin="normal" >
            <InputLabel htmlFor="name"> email</InputLabel>
            <Input
              onChange={this.handleChange}
              type="text"
              name="organiserEmail"
            />
          </FormControl>
        </div>
        <Button
          type="button"
          variant="contained"
          color="secondary"
          onClick={this.onSubmit}
        >
          Add
        </Button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { state: state };
}

export default connect(mapStateToProps)(EventAddition);
