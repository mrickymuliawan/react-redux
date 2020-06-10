import React, { Component } from 'react';
import { connect } from 'react-redux'
import Card from './Card';
import { addTodo } from './redux/actions/todoAction';

class Header extends Component {
  state = {
    data: 'naama'
  }
  render() {
    console.log('render HEADER', this.props.todos);

    return (
      <div>
        <h1>Header</h1>
        <button onClick={() => this.props.addTodo(this.state.data)}>add todo</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
})

const mapdispatchToProps = (dispatch) => ({
  addTodo: (text) => {
    return dispatch(addTodo(text))
  }
})

export default connect(mapStateToProps, mapdispatchToProps)(Header);
