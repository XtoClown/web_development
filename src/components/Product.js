import React, {useState, useEffect, useCallback} from 'react'
import Comment from './Comment'
import AddNewComment from './AddNewComment'
import userAvatar from '../image/avatar.jpg'

export default function Product(props) {

  const [comments, setComments] = useState([]);

  const newCommentAddHandler = useCallback( (text=null) => {
    setComments(props.isLoggedIn ?
      [ <Comment commentText={text} userName="Oleh" userAvatar={userAvatar}/>, comments ]  : 
      [ <Comment commentText={text}/>, comments ]);
  }, [comments, props.isLoggedIn])

  useEffect( () => {
    alert("Comment section render...");
  }, [comments])

  return (
    <div class="productWindow">
      <div class="product">
          <div class="productIcon"><img src={props.image} alt="productImage"/></div>
          <div class="productName">{props.name}</div>
          <div class="productInfo"><ul>{props.productObject.map((item, index) => 
              <li key={index}>
                  {item}
              </li>)}</ul>
          </div>
      </div>
      <div class="commentary">
          <div class="commentaryPlace">
                  <AddNewComment onClick={newCommentAddHandler}/>
                  {comments}
          </div>
      </div>
    </div>
  )
}

Product.defaultProps = { image: null, name: null}