import React, { Component } from 'react'
import Currency from './Currency'

function toUsd(uah){
    return uah / 41.38;
}

function toUah(usd){
    return usd * 41.38;
}

function tryConvert(money, convert){
    const input = parseFloat(money);
    if (Number.isNaN(input)) return '';
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

export default class Converter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         money: "",
         currency: "uah"
      };
      this.handleUsdChange = this.handleUsdChange.bind(this);
      this.handeUahChange = this.handeUahChange.bind(this);
    }
    
    handleUsdChange(money){
        this.setState({currency: "usd", money});
    }

    handeUahChange(money){
        this.setState({currency: "uah", money})
    }

  render() {
    const currency = this.state.currency;
    const money = this.state.money;
    const uah = currency === "usd" ? tryConvert(money, toUah) : money;
    const usd = currency === "uah" ? tryConvert(money, toUsd) : money;

    return (
      <div class="converter">
        <Currency currency={"uah"} money={uah} onMoneyChange={this.handeUahChange}/>
        <Currency currency={"usd"} money={usd} onMoneyChange={this.handleUsdChange}/>
      </div>
    )
  }
}
