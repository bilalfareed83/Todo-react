import React, {Component, Fragment} from 'react'

class Todo extends Component{
    
    state = {
        text: "",
        todoItem:[]
    }
    
    handlerChange = (e) => {
        this.setState({text: e.target.value})
    }

    addItem = () => {
        if(!this.state.text){ return}
        this.state.todoItem.push(this.state.text)
        this.setState({ todoItem: this.state.todoItem, text:"" })
        
    }

    deleteItem = (e) => {
        let id = e.target.id
        this.state.todoItem.splice(id,1)
        this.setState({ todoItem: this.state.todoItem})
        
    }

    submitForm = (event) => {
        event.preventDefault()
    }
 

    render() {
        
        return (
            <Fragment>
                <header>
                    <h1>Todo app</h1>
                    <form onSubmit={this.submitForm}>
                        <input type="text" value={this.state.text} onChange={this.handlerChange} placeholder="Type here todo item " />
                <br/>
                        <input type="submit" value="add" onClick={this.addItem} />
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