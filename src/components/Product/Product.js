import React, {useState, useEffect, useCallback} from 'react'
import Comment from '../Comment/Comment'
import AddNewComment from '../Comment/AddNewComment'
import { useUser } from '../User/UserContext';
import { useLoginContext } from '../User/LoginContext';
import style from './Product.module.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function Product(props) {

  const [comments, setComments] = useState([]);

  const user = useUser();
  const username = user.username;
  const avatar = user.avatar;

  const login = useLoginContext();
  const isLoggedIn = login.isLoggedIn;

  const [commentId, setCommentId] = useState(1);

  const newCommentAddHandler = useCallback( (text=null) => {
    setComments(isLoggedIn ? 
      [ { id: `item${commentId}`, 
        comment: <Comment commentText={text} userName={username} userAvatar={avatar} deleteComment={() => deleteComment(`item${commentId}`)}/> }, ...comments ] : 
      [ { id: `item${commentId}`, 
        comment: <Comment commentText={text} deleteComment={() => deleteComment(`item${commentId}`)}/> }, ...comments ])
    setCommentId( (id) => id + 1 )}, [comments, isLoggedIn])

  useEffect( () => {
    alert("Comment section render...");
  }, [comments])

  const deleteComment = useCallback( (id) => {
    setComments((comments) => comments.filter((comment) => comment.id !== id))
  }, comments)

  return (
    <div class={style.productWindow}>
      <div class={style.product}>
          <div class={style.productIcon}><img src={props.image} alt="productImage"/></div>
          <div class={style.productName}>{props.name}</div>
          <div class={style.productInfo}><ul>{props.productObject.map((item, index) => 
              <li key={index}>
                  {item}
              </li>)}</ul>
          </div>
      </div>
      <div class={style.commentary}>
          <div class={style.commentaryPlace}>
            <AddNewComment onClick={newCommentAddHandler}/>
            <TransitionGroup>
              {comments.map((item) => 
                <CSSTransition key={item.id} timeout={400} classNames="comment">
                  {item.comment}
                </CSSTransition>  
              )}
            </TransitionGroup>
          </div>
      </div>
    </div>
  )
}

Product.defaultProps = { image: null, name: null}