import React, {Component} from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
let nextTodoId = 0

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            text:"",
            filter: "SHOW_ALL"
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSubmit1 = this.handleSubmit1.bind(this)
        this.toggleTodo = this.toggleTodo.bind(this)
    }

    toggleTodo(id){
        console.log(id+"to upper")
        this.setState({
            todos: this.state.todos.map(todo =>
                {
                    return (todo.id == id)
                        ? {...todo, completed: !todo.completed}
                        : todo
                }
            )
        })
        console.log(this.state.todos)
    }

    handleSubmit1(text) {
        this.setState({
            todos: [...this.state.todos, {
                id: nextTodoId++,
                text: text,
                completed: false
            }]
        });
        this.refs.input.value = ""
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.refs.input.value)
            return
        this.setState({
            todos: [...this.state.todos, {
                id: nextTodoId++,
                text: this.refs.input.value,
                completed: false
            }]
        });
        this.refs.input.value = ""
    }

    render() {
        return <div>
            <AddTodo
                handleSubmit={this.handleSubmit1}
            />
            <form onSubmit={this.handleSubmit}>
                <input ref="input"/>
                <input type="submit" value="Submit"/>
            </form>
            <TodoList
                todos={this.state.todos}
                toggleTodo={this.toggleTodo}
            />
            <ul>
                {
                    this.state.todos.map(todo =>
                        <li
                            key={todo.id}
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none'
                            }}
                        >{todo.text}</li>
                    )
                }
            </ul>
        </div>
    }

}

export default App;