import React, { Component } from 'react';
import { connect } from 'react-redux'
import Card from './Card';
import Header from './Header';

class App extends Component {
  // state = {
  //   data: [
  //     { text: 'awal', completed: 'belom' }
  //   ]
  // }

  componentDidMount() {
    console.log('DARI APP', this.props.todos);

  }

  render() {
    console.log('render APP', this.props.todos);

    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}
// SUBSCRBRIB
const mapStateToProps = (state) => ({
  todos: state.todos
})

export default connect(mapStateToProps, null)(App);
