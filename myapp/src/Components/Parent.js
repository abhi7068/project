import React, { Component } from 'react';
import EventAddition from './EventAddition';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { update, remove } from '../reducer/actions';
import List from './List';
import AddUser from './AddUser';
import Editpage from './Editpage';
import Login from './Login';
import adminDashboard from './Dashboard';
import OrganiserDashboard from "./OrganiserDashboard";
import Protected from './Protected';
import OrganiserList from "./OrganiserList";
import Organiser from "./Organiser";
import OrganiserUpdate from './OrganiserUpdate';
class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: {},
      key: {},
      keyforUpdate: {},
    };
  }
  update = () => {
    console.log('im update');
  };
  editdata = (item, key) => {
    console.log( item);
    this.setState(
      {
        temp: item,
        keyforUpdate: key,
      },
      () => {
        console.log(this.state);
        this.props.history.push('/admin/updateEvent');
      }
    );
  };
  editdata1 = (item, key) => {
    console.log( item);
    this.setState(
      {
        temp: item,
        keyforUpdate: key,
      },
      () => {
        console.log(this.state);
        this.props.history.push('/OrganiserUpdate');
      }
    );
  };

  update = () => {
    let { dispatch } = this.props;
    let { key } = this.state;
    dispatch(update(this.model.toJson(), key));
  };
  remove = (key) => {
    console.log(key, 'key is coming ');

    this.setState(
      {
        key: key,
      },
      () => {
        let { dispatch } = this.props;
        //	let { key } = this.state;
        dispatch(remove(this.state.key)); ////////
      }
    );
  };

  render() {
    console.log(this.state.temp);
    console.log('this is the final sta', this.props.state);
    return (
      <div>
        <Protected exact path="/adminDashboard" component={adminDashboard} />
        <Route exact path="/OrganiserDashboard" component={OrganiserDashboard} />
        <Route exact path="/OrganiserList" 
          component={(props) => (
            <OrganiserList
              {...props}
              editdata1={this.editdata1}
            isAuthed={true}
            />
           
          )}
       />
        <Route exact path="/Organiser" component={Organiser} />
        <Route exact path="/OrganiserUpdate" component={OrganiserUpdate} />
       
        <Protected
          exact
          path="/admin/Event"
          component={(props) => <EventAddition {...props} isAuthed={true} />}
        />
        <Route exact path="/" component={(props) => <Login {...props} />} />
        {/* <Addproduct onModelChange={this.onModelChange} /> */}
        <Protected
          exact
          path="/admin/list"
          component={(props) => (
            <List
              // {...props}
              editdata={this.editdata}
              remove={this.remove}
              isAuthed={true}
            />
           
          )}
        />{' '}
        <Protected path="/admin/addUser" component={() => <AddUser />} />
        <Protected
          exact
          path="/admin/updateEvent"
          component={(props) => (
            <Editpage
              temp={this.state.temp}
              keying={this.state.keyforUpdate}
              isAuthed={true}
              {...props}
            />
          )}
        />{' '}
        {/* </BrowserRouter> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state: state };
}

export default withRouter(connect(mapStateToProps)(Parent));
