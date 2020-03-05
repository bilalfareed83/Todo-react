import React, { Component, Fragment } from 'react'

class Todo extends Component {

    state = {
        text: "",
        todoItem: []
    }

    handlerChange = (e) => {
        this.setState({ text: e.target.value })
    }

    addItem = (event) => {
        event.preventDefault()
        if (!this.state.text) { return }
        // Do not mutate the state directly 
        // this.state.todoItem.push(this.state.text)
        const mergedTodos = [...this.state.todoItem, this.state.text]
        this.setState({ todoItem: mergedTodos, text: "" })

    }

    deleteItem = (e) => {
        let id = e.target.id
        this.state.todoItem.splice(id, 1)
        this.setState({ todoItem: this.state.todoItem })
    }

    render() {

        return (
            <Fragment>
                <header>
                    <h1>Todo app</h1>
                    <form onSubmit={this.addItem}>
                        <input type="text" value={this.state.text} onChange={this.handlerChange} placeholder="Type here todo item " />
                        <br />
                        {/* use the form's on submit handler */}
                        <input type="submit" value="add" />
                    </form>
                </header>
                <ul>
                    {this.state.todoItem.map((val, i) => {
                        return (<li key={i}>{this.state.todoItem[i]} <span id={i} onClick={this.deleteItem}>x</span></li>)
                    })}
                </ul>

            </Fragment>
        )
    }
}

export default Todo