import React, {Component} from 'react'


class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.doSubmit = this.doSubmit.bind(this)
    }

    doSubmit(e) {
        e.preventDefault();
        if (!this.refs.input.value)
            return
        console.log(this.refs.input.value)
        this.props.handleSubmit(this.refs.input.value)

    }

    render() {
        return <div>
            <form onSubmit={this.doSubmit}>
                <input ref="input"/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    }

}

export default AddTodo