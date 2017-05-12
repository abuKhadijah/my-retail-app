import React from "react";

export const ProductPrice = ({formattedPrice, priceQualifier}) => <div className="product-price">
  { formattedPrice && <span className="product-formatted-price p-red">{formattedPrice}</span> }
  { priceQualifier && <span className="price-qualifier">{priceQualifier}</span> }
</div>
