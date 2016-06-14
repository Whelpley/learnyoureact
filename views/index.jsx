import React from 'react';

export default class TodoBox extends React.Component {
    render() {
        return (
            <div className="todoBox">
                <h1>Todos</h1>
                <TodoList />
                <TodoForm />
            </div>
        );
    }
}

class TodoList extends React.Component {
    render() {
        return (
            <div className="todoList">
                <table style={{border: "2px solid black"}}>
                  <tbody>
                    <Todo title="Shopping">Milk</Todo>
                    <Todo title="Hair cut">13:00</Todo>
                    <Todo title="Learn React">15:00</Todo>
                  </tbody>
                </table>
            </div>
        );
    }
}


// Write code to set the initial value of checked and define handleChange.
// Within handleChange, you should update the component's state by using this.setState.

var Todo = React.createClass({

  propTypes: {
    title: React.PropTypes.string.isRequired
  },

  getInitialState() {
    return {checked: false};
  },

  handleChange() {
    this.setState({checked: !this.state.checked});
  },

    render() {
        return (
            <tr>
                <td style={{border: "1px solid black"}}>
                    <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
                </td>
                <td style={{border: "1px solid black"}}>{this.props.title}</td>
                <td style={{border: "1px solid black"}}>{this.props.children}</td>
            </tr>
        );
    }
});

class TodoForm extends React.Component {
    render() {
        return (
            <div className="todoForm">
              I am a TodoForm.
            </div>
        );
    }
}

