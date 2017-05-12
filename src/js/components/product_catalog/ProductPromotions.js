import React from "react";
import MdLocalOffer from "react-icons/lib/md/local-offer";
const createPromtions = (promotions) => promotions.map((promotion, index) => (
    <div key={ index } className="promotion-wrapper">
        <span className="promotion-icon"><MdLocalOffer fill="#c00"/></span>
        <span className="promotion-text">{ promotion.Description[0].shortDescription }</span>
    </div>
));
export const ProductPromotions = ({promotions}) => <div className="product-promotions p-red">
    { createPromtions(promotions) }
</div>
