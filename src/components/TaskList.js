import React from 'react'
import { useSelector } from 'react-redux'
import { todoSelector } from '../store/todoSlice'
import TaskItem from './TaskItem'
import style from './TaskList.module.css'

export default function TaskList() {

    const todos = useSelector(todoSelector)

  return (
    <table className={style.customTable}>
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Type</th>
            <th>Remove</th>
        </tr>
        {todos.map((todo) => (
            <TaskItem key={todo.id} id={todo.id} text={todo.text} price={todo.price} type={todo.type}/>
        ))}
    </table>
  )
}
