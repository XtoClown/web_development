import React from 'react';
import productImage from "../../image/product.jpg";
import Product from '../Product/Product';
import Converter from '../Converter/Converter';
import { Processor } from '../DataModel/Processors';
import style from './Homepages.module.css'

export default function Body() {

  let amdRyzenFive = new Processor("Ryzen 5", "AMD AM5", "5 nm", "6 cores", "12 threads", "3.7 GHz", "5 GHz", "384 KB", "6144 KB", "32 MB", "65 W");

  return (
    <div className={style.appBody}>
      <Product name={"AMD Ryzen 5 Raphael 7500F"} productObject={amdRyzenFive.processorInfo()} image={productImage}/>
      <Converter/>
    </div>
  )
}
