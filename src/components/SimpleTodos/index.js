import {Component} from 'react'

import {v4} from 'uuid'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {todosList: initialTodosList, input: ''}

  deleteTodo = id => {
    const {todosList} = this.state
    const updatedTodoList = todosList.filter(each => each.id !== id)
    this.setState({todosList: updatedTodoList})
  }

  input = event => {
    this.setState({input: event.target.value})
  }

  onClickAdd = () => {
    const {input} = this.state
    const newTodo = {
      id: v4(),
      title: input,
    }
    this.setState(prevState => ({todosList: [...prevState.todosList, newTodo]}))
  }

  render() {
    const {todosList, input} = this.state
    return (
      <div className="bg-container">
        <div className="input-container">
          <input
            onChange={this.input}
            type="search"
            className="input-feild"
            value={input}
          />
          <button type = 'button' className="add-btn" onClick={this.onClickAdd}>
            Add
          </button>
        </div>
        <div className="card-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="name-icon-container">
            <ul>
              {todosList.map(each => (
                <TodoItem
                  itemsList={each}
                  deleteTodo={this.deleteTodo}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
