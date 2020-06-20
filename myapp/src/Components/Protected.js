import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
const Protected = ({ state, component: Component, ...rest }) => {
  console.log(rest);
  return (
    <Route
      {...rest}
      render={(props) =>
        state.isAdmin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
function mapStateToProps(state) {
  console.log('hello', state);
  return { state: state.userDetails };
}

export default connect(mapStateToProps)(Protected);
