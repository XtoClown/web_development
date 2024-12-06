import { createSlice } from "@reduxjs/toolkit"

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
        filter: 'default'
    },
    reducers: {
        addTodo(state, action) {

            console.log("Action: ", action)
            console.log("State before: ", state)

            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                price: action.payload.price,
                type: action.payload.type
            })

            console.log("State after: ", state)
        },
        removeTodo(state, action) {
            console.log("Action: ", action)
            console.log("State before: ", state)
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
            console.log("State after: ", state)
        },
        setFilter(state, action) {

            console.log("Action: ", action)
            console.log("State before: ", state)

            state.filter = action.payload

            console.log("State after: ", state)

            if(state.filter == "name"){
                state.todos.sort((itemOne, itemTwo) => itemOne.text.localeCompare(itemTwo.text))
            }
            else if(state.filter == "type"){
                state.todos.sort((itemOne, itemTwo) => itemOne.type.localeCompare(itemTwo.type))
            }
            else if(state.filter == "price"){
                state.todos.sort((itemOne, itemTwo) => itemOne.price - itemTwo.price)
            }
            else(
                state.todos.sort((itemOne, itemTwo) => new Date(itemOne.id) - new Date(itemTwo.id))
            )
        }
    }
})


export const { addTodo, removeTodo, setFilter } = todoSlice.actions
export default todoSlice.reducer

export const todoSelector = (state) => {
    return state.todos.todos
}