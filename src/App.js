import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {

  handleOnClickItems() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_ITEMS',
    });
  }

  handleOnClickUsers() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_USERS',
    });
  }

  render() {
    // debugger;
    console.log(this.props.users)
    return (
      <div className="App">
          <button onClick={() => {
            this.handleOnClickItems()
            console.log(this.props.items.length)}}>
              Click to change items count
            </button>
            <p>{this.props.items.length}</p>
          <button onClick={() => {
            this.handleOnClickUsers()
            console.log(this.props.users)}}>
              Click to change user count
          </button>
          <p>{this.props.users.length}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // debugger;
  return { items: state.items,
           users: state.users 
          }
}

export default connect(mapStateToProps)(App);
