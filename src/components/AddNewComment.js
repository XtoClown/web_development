import React, { Component } from 'react'

export default class AddNewComment extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         text: ""
      }

      this.textChangeHandler = this.textChangeHandler.bind(this);
      this.callbackAddNewComment = this.callbackAddNewComment.bind(this);
    }
    

    textChangeHandler(event){
        this.setState({text: event.target.value})
    }

    callbackAddNewComment(){
        if(this.state.text !== ""){
            this.props.onClick(this.state.text);
            alert(`Your review "${this.state.text}" was added successfully`);
            this.state.text = "";
        }
        else{
            this.props.onClick();
        }
    }

  render() {
    
    return (
      <div class="newComment">
            <textarea type="text" id="textInput" onChange={this.textChangeHandler} placeholder="Share your opinion" value={this.state.text}/>
            <button onClick={this.callbackAddNewComment} disabled={this.state.text.length < 10 }>Comment</button>
      </div>
    )
  }
}
