import React,{Component} from 'react'

class TodoList extends Component{
    constructor(props){
        super(props)
        this.toggleTodo = this.toggleTodo.bind(this)
    }

    toggleTodo(e){
        console.log(e)
        let id = e.target.id
        console.log(id)
        this.props.toggleTodo(id)
    }

    render(){
        return <ul>
            {
                this.props.todos.map(todo =>
                    <li
                        id={todo.id}
                        key={todo.id}
                        onClick={this.toggleTodo}
                        style={{
                            textDecoration:todo.completed?"line-through":"none"
                        }}

                    >
                        {todo.text}
                    </li>
                )
            }
        </ul>
    }
}

export default TodoList