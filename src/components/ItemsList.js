import React, { Component } from 'react'
import Item from './Item'

export default class ItemsList extends Component {
 
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }

      this.countUpdater = this.countUpdater.bind(this)
    }
    
    countUpdater(event){
        this.setState(state=>({
            count: event.target.checked ? state.count + 1 : state.count - 1
        }))
    }

    render() {
    return (
        <div class="main">
            <div class="countHolder">Items picked: {this.state.count}</div>
            <div class="listHolder">
                {this.props.componentItemsList.map((name)=>(<Item componentItem={name} eventHandleFunction={this.countUpdater}/>))}
            </div>
        </div>
    )
    }
}

ItemsList.defaultProps = { componentItemsList: [] }
