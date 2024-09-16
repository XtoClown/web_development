import React, { Component } from 'react'

export default class Item extends Component {

    changesHandler = (event) =>{
        this.props.eventHandleFunction(event);
    }

    render() {
        return (
            <div>
            <input type="checkbox" value={this.props.componentItem} onChange={this.changesHandler}/>
            <label for="vehicle1"> {this.props.componentItem} </label><br/>
            </div>
        )
    }
}

Item.defaultProps = { componentItem: null }