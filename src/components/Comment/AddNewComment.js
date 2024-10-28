import React, {useCallback, useState} from 'react'
import style from './AddNewComment.module.css'
import { useThemeContext } from '../ThemeContext/ThemeContext';

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
  
  const theme = useThemeContext()

  const callbackAddNewComment = useCallback( () => {
    props.onClick(textarea.value);
    alert(`Your review "${textarea.value}" was added successfully`);
    textarea.setValue("");
  }, [textarea.value])

  return (
    <div className={style.newComment}>
      <textarea type="text" id="textInput" placeholder="Share your opinion" {...textarea} style={{ backgroundColor: theme.secondaryColor, borderColor: theme.decorColor, color: theme.decorColor, placeholder: theme.secondaryColor }}/>
      <button onClick={callbackAddNewComment} disabled={textarea.value.length < 10 } style={{ backgroundColor: theme.secondaryColor, color: theme.decorColor }}>Comment</button>
    </div>
  )
}
