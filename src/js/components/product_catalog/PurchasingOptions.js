import React from "react";
export const PurchasingOptions = ({purchasingChannelCode}) => (
        <div className="purchasing-options grid-container grid-gap-4px">
           { (purchasingChannelCode === 0 || purchasingChannelCode === 2) && <button className="store-pickup">Pick up in store</button>}
           { (purchasingChannelCode === 0 || purchasingChannelCode === 1) && <button className="add-to-cart">Add to Cart</button> }
        </div>
)
