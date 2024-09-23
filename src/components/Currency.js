import React, { Component } from 'react'

const currencyNames = {
    usd: "US Dollar",
    uah: "Ukraine Hryvnia"
}

export default class Currency extends Component {

    constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.props.onMoneyChange(event.target.value);
    }

  render() {
    const money = this.props.money;
    const currency = this.props.currency;
    return (
      <div class="currency">
        <label for="moneyInput">{currencyNames[currency]}</label>
        <input id="moneyInput" value={money} onChange={this.handleChange}/>
      </div>
    )
  }
}
