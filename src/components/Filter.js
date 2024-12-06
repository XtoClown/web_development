import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from '../store/todoSlice'
import style from './Filter.module.css'

export default function Filter() {

    const dispatch = useDispatch()

    const handleSort = (e) => {
        dispatch(setFilter(e.target.value))
    }


  return (
    <div className={style.dropdownMain}>
      <select onChange={handleSort}>
        <option value="default">Default</option>
        <option value="name">Name</option>
        <option value="price">Price</option>
        <option value="type">Type</option>
      </select>
    </div>
  )
}
