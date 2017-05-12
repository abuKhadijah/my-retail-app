import React from "react";
function createMarkup(feature) { return {__html: feature}; }
export const ProductHighlights = ({features}) => (
    <div className="product-highlights"><h2>Product Highlights</h2>
    {
        features.map((feature, index) =>
            <li key={index} dangerouslySetInnerHTML={createMarkup(feature)}/>
        )
    }
    </div>
);
