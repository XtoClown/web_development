import React, {useCallback, useState} from 'react'
import { useThemeContext } from '../ThemeContext/ThemeContext';
import Comment from '../Formik/Comment';

export default function AddNewComment(props) {


  const theme = useThemeContext();

  const callbackAddNewComment = useCallback( (values) => {
    props.onClick(values.text);
  })

  const fieldStyle = { backgroundColor: theme.secondaryColor, borderColor: theme.decorColor, color: theme.decorColor, placeholder: theme.secondaryColor };
  const buttonStyle = { backgroundColor: theme.secondaryColor, color: theme.decorColor };


  return (
    <Comment fieldStyle={fieldStyle} buttonStyle={buttonStyle} submitHandler={callbackAddNewComment}/>
  )
}
