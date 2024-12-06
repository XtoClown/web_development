import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './store/todoSlice'
import TaskList from './components/TaskList';
import Filter from './components/Filter';

function App() {

  const [text, setText] = useState("")
  const [price, setPrice] = useState("")
  const [type, setType] = useState("")

  const dispatch = useDispatch()
  const addTask = () => {
    dispatch(addTodo({text, price, type}))
  }

  return (
    <div className="App">
      <Input text={text} price={price} type={type} handleInputText={setText} handleInputPrice={setPrice} handleInputType={setType} handleSubmit={addTask}/>
      <Filter/>
      <TaskList />
    </div>
  );
}

export default App;
