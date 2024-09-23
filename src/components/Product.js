import React, { Component } from 'react'
import Comment from './Comment'
import AddNewComment from './AddNewComment'
import userAvatar from '../image/avatar.jpg'

export default class Product extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         commentList: []
      }

      this.newComment = this.newComment.bind(this)
    }
    

    newComment(text=null){
        this.setState(state=>({
            commentList: this.props.isLoggedIn ?
            [ <Comment commentText={text} userName="Oleh" userAvatar={userAvatar}/>, state.commentList ]  : 
            [ <Comment commentText={text}/>, state.commentList ] 
        }))
    }

  render() {
    return (
      <div class="productWindow">
        <div class="product">
            <div class="productIcon"><img src={this.props.image} alt="productImage"/></div>
            <div class="productName">{this.props.name}</div>
            <div class="productInfo"><ul>{this.props.info.map((item, index) => 
                <li key={this.props.keyList[index]}>
                    {this.props.keyList[index]}: {item}
                </li>)}</ul>
            </div>
        </div>
        <div class="commentary">
            <div class="commentaryPlace">
                    <AddNewComment onClick={this.newComment}/>
                    {this.state.commentList}
            </div>
        </div>
      </div>
    )
  }
}

Product.defaultProps = { image: null, name: null, info: null, keyList: null}