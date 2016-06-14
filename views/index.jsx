import React from 'react';

export default class TodoBox extends React.Component {
    render() {
        return (
          <div className="todoBox">
            <h1>Todos</h1>
            <TodoList data = {this.props.data} />
            <TodoForm />
          </div>
        );
    }
}

class TodoList extends React.Component {
    render() {
        var todo = this.props.data.map(function(obj) { return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>});
        return (
          <div className = "todoList">
            <table style={{border: "2px solid black"}}>
              <tbody>
                {todo}
              </tbody>
            </table>
          </div>
        );
    }
}

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
        let trStyle = this.state.checked ? style.checkedTodo : style.notCheckedTodo;
        return (
            <tr style={trStyle}>
                <td style={style.tableContent}>
                    <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
                </td>
                <td style={style.tableContent}>{this.props.title}</td>
                <td style={style.tableContent}>{this.props.children}</td>
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
};

let style = {
    checkedTodo: {
        textDecoration: "line-through"
    },
    notCheckedTodo: {
        textDecoration: "none"
    },
    tableContent: {
        border: "1px solid black"
    }
};
