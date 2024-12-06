import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../store/todoSlice'

export default function TaskItem({ id, text, price, type }) {

    const dispatch = useDispatch()

  return (
    <tr>
        <td>{text}</td>
        <td>{price}</td>
        <td>{type}</td>
        <td><button type="button" onClick={() => dispatch(removeTodo({ id }))}>Delete</button></td>
    </tr>
  )
}
