import React, {useCallback, useState} from 'react'
import style from './AddNewComment.module.css'

function useTextarea(initialValue){
  const [value, setValue] = useState(initialValue);

  function onChange(event){
    setValue(event.target.value);
  }

  return{
    value, onChange, setValue
  }
}

export default function AddNewComment(props) {

  const textarea = useTextarea("");

  const callbackAddNewComment = useCallback( () => {
    props.onClick(textarea.value);
    alert(`Your review "${textarea.value}" was added successfully`);
    textarea.setValue("");
  }, [textarea.value])

  return (
    <div className={style.newComment}>
      <textarea type="text" id="textInput" placeholder="Share your opinion" {...textarea}/>
      <button onClick={callbackAddNewComment} disabled={textarea.value.length < 10 }>Comment</button>
    </div>
  )
}
