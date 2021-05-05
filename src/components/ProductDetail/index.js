import React, { useState, useEffect } from "react"

import { fetchProductDetail } from "./../../utils/api"
import { formatPrice } from './../../utils/currencyHelper'

import "./style.css"

function ProductDetail({ productId }) {
  const [productInfo, setProductInfo] = useState(null)

  useEffect(() => {
    if (!productId) return;

    fetchProductDetail(productId).then((productInfo) =>
      setProductInfo(productInfo)
    );
  }, [productId])

  const renderProductInfo = () => {
    const formattedPrice = productInfo && productInfo.price ? formatPrice(productInfo.price) : ''

    return (
      <div className="detail-container">
        <div className="row">
          <img src={productInfo.image} className="product-image" alt="product img"/>
        </div>
        <div className="row">
          <div className="row-title">Name:</div>
          <div className="row-body">{productInfo.title}</div>
        </div>
        <div className="row">
          <div className="row-title">Name:</div>
          <div className="row-body">{productInfo.description}</div>
        </div>
        <div className="row">
          <div className="row-title">Price:</div>
          <div className="row-body">{formattedPrice}</div>
        </div>
      </div>
    );
  };

  return productInfo && renderProductInfo()
}

export default ProductDetail
