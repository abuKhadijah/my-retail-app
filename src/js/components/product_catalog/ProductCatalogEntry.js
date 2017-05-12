import React from "react";
import Moment from "moment";
import { ProductTitle } from "./ProductTitle";
import { ProductCarousel } from "./ProductCarousel";
import { ProductPrice } from "./ProductPrice";
import { ProductPromotions } from "./ProductPromotions";
import { QuantitySelector } from "./QuantitySelector";
import { PurchasingOptions } from "./PurchasingOptions";
import { ReturnPolicy } from "./ReturnPolicy";
import { ShareableOptions } from "./ShareableOptions";
import { ProductHighlights } from "./ProductHighlights";
import { ProductReview } from "./ProductReview";
import { isValidString, isValidObject, returnFirstElementOfArray } from "../../lib/helpers";

const groupImages = (defaultImages, altImages) => defaultImages.concat(altImages);


/**
 * This component represents individual Product in the catalog.
 * @returns Returns a div component wrapping over the different sections of the page.
 */
export const ProductCatalogEntry = ({productDetails}) => {
  if (isValidObject(productDetails)) {
    const images = returnFirstElementOfArray(productDetails.Images);
    const offerPrice = returnFirstElementOfArray(returnFirstElementOfArray(productDetails.Offers).OfferPrice);
    const returnPolicy = returnFirstElementOfArray(productDetails.ReturnPolicy).legalCopy;
    const features = returnFirstElementOfArray(productDetails.ItemDescription).features;
    const customerReview = returnFirstElementOfArray(productDetails.CustomerReview);
    const totalReviews = isValidString(customerReview.totalReviews) ? customerReview.totalReviews : null;
    const consolidatedOverallRating = isValidString(customerReview.consolidatedOverallRating) ? customerReview.consolidatedOverallRating : null;
    const negativeReview = returnFirstElementOfArray(customerReview.Con);
    const positiveReview = returnFirstElementOfArray(customerReview.Pro);
    const negativeComment = isValidString(negativeReview.review) ? negativeReview.review : null;
    const conOverallRating = isValidString(negativeReview.overallRating) ? negativeReview.overallRating : null;
    const conTitle = isValidString(negativeReview.title) ? negativeReview.title : null;
    const conReviewCreator = isValidString(negativeReview.screenName) ? negativeReview.screenName : null;
    const conPostedDate = isValidString(negativeReview.postedDate) ? Moment(Date.parse(negativeReview.datePosted)).format('MMMM d, Y') : null;
    const positiveComment = isValidString(positiveReview.review) ? positiveReview.review : null;
    const proOverallRating = isValidString(positiveReview.overallRating) ? positiveReview.overallRating : null;
    const proTitle = isValidString(positiveReview.title) ? positiveReview.title : null;
    const proReviewCreator = isValidString(positiveReview.screenName) ? positiveReview.screenName : null;
    const proPostedDate = isValidString(positiveReview.datePosted) ? Moment(Date.parse(positiveReview.datePosted)).format('MMMM d, Y') : null;

    return (
      <div className="product-catalog-entry grid-container">
        <ProductTitle title={productDetails.title}/>
        <ProductCarousel imagePaths={ groupImages(images.PrimaryImage, images.AlternateImages) }/>
        <ProductPrice formattedPrice={offerPrice.formattedPriceValue} priceQualifier={ offerPrice.priceQualifier }/>
        <ProductPromotions promotions={productDetails.Promotions}/>
        <QuantitySelector />
        <PurchasingOptions purchasingChannelCode={parseInt(productDetails.purchasingChannelCode, 10)}/>
        <ReturnPolicy policyMessage={ returnPolicy }/>
        <ShareableOptions />
        <ProductHighlights features={ features }/>
        <ProductReview conOverallRating={conOverallRating} conTitle={conTitle} conReviewCreator={conReviewCreator}
                       conPostedDate={conPostedDate} proPostedDate={proPostedDate} proReviewCreator={proReviewCreator}
                       proOverallRating={ proOverallRating} proTitle={ proTitle } positiveComment={positiveComment}
                       negativeComment={ negativeComment } totalReviews={ totalReviews }
                       consolidatedOverallRating={ consolidatedOverallRating }/>
      </div>
    );
  } else {
    return null;
  }
};
