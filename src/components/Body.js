import React, { Component } from 'react';
import productImage from "../image/product.jpg";
import Product from './Product';
import Converter from './Converter';

const keyList = [
  "Series",
  "Socket",
  "Technological process",
  "Number of cores",
  "Number of threads",
  "Clock frequency",
  "TurboBoost / TurboCore frequency",
  "L1 level 1 cache",
  "L2 level 2 cache",
  "L3 level 3 cache",
  "Heat dissipation (TDP)"
]

const valueList = [
  "Ryzen 5",
  "AMD AM5",
  "5 nm",
  "6 cores",
  "12 threads",
  "3.7 GHz",
  "5 GHz",
  "384 KB",
  "6144 KB",
  "32 MB",
  "65 W"
]

export default class Body extends Component {
  render() {
    return (
      <div class="appBody">
          <Product name={"AMD Ryzen 5 Raphael 7500F"} image={productImage} keyList={keyList} info={valueList} isLoggedIn={this.props.isLoggedIn}/>
          <Converter/>
      </div>
    )
  }
}

Body.defaultProps = { children: null };