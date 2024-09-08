import React, { Component } from 'react'

export default class Fifthcomponent extends Component {
    render() {
    return (
        <div class="fifthComponentMain">
            <h1>Group: {this.props.group}</h1>
            {this.props.student.map((name, index) => (<div key={index}>{index + 1}. {name}</div>))}
        </div>
    )
    }
}

Fifthcomponent.defaultProps = { group: 0, student: [] };
