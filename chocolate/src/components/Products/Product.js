import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import "./Product.css"

function Product({ product }) {
  const [productData, setproductData] = useState(product);
  const [cheapestShop, setcheapestShop] = useState();
  const minPreis = Math.min.apply(null, productData.prices.map(item => item.price))
  const history = useHistory();
  const [average, setAverage] = useState();
  const [lowestPrice, setLowestPrice] = useState();
  let total = 0;
  let gramPrices = []; // prices per 100 gr

  //Function for Preis per 100 gr....
  function preisPerGr() {
    for (let i = 0; i < productData.prices.length; i++) {
      if (productData.prices[i].unit === 'g') {
        gramPrices.push(((productData.prices[i].price) * 100) / productData.prices[i].amount)
      }
      else if (productData.prices[i].unit === 'kg') {
        gramPrices.push(((productData.prices[i].price) * 100) / (productData.prices[i].amount * 1000))
      }
    }
    let sortedGramPreis = gramPrices.sort(function (a, b) { return a - b });
    setLowestPrice(sortedGramPreis[0]?.toFixed(2))
  }

  function findAvarage() {
    for (let i = 0; i < gramPrices.length; i++) {
      total +=  gramPrices[i];
    }
    setAverage((total / gramPrices.length).toFixed(2));
  }

  function cheapest() {
    for (let i = 0; i < productData.prices.length; i++) {
      if (productData.prices[i].price == minPreis) {
        setcheapestShop(productData.prices[i].link);
      }
    }
  }

  const openDetails = () => {
    history.push(`/detail/${productData.id}`, productData)
  }

  useEffect(() => {
    preisPerGr();
    findAvarage();
    cheapest();
  });

  return (
    <div className='container' >
      <div onClick={openDetails}>
        <div>
          <span>Product Name: </span>
           {product.name}
        </div>
        <div>
          <span>Brand: </span>
          {product.brand}
        </div>
        <div >
          <span>Lowest Price per 100gr: </span>
          {lowestPrice === undefined ? 'Not Available!' : lowestPrice + ' €'} 
          <div>
            <span>
              Average Preis per 100gr: </span>
            {average === 'NaN' ? 'Not Available!' : average +' €'} 
          </div>
        </div>
      </div>
      <div>
        <a href={cheapestShop} target="_blank">
          To Lowest Preis Shop
          {cheapestShop === undefined && ': Link Not Available!'}
        </a>
      </div>
    </div>
  );
}

export default Product


