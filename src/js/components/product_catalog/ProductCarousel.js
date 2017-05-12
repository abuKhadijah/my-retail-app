import React from "react";
import { Carousel } from 'react-responsive-carousel';
import { isValidArray} from "../../lib/helpers";
/**
 * Helper function to create slides in the carousel.
 */
const createSlides = (imagePaths) => imagePaths.map((imagePath, index) => (
  <div key={index}>
    <img src={ imagePath.image } alt="click"/>
  </div>
));

/**
 * This component represent the carousel section. It wraps over the React responsive carousel component
 * @returns ProductCarousel
 */
export const ProductCarousel = ({imagePaths}) =>
  <div className="product-carousel">
    { isValidArray(imagePaths) && <Carousel showArrows={false}>
      { createSlides(imagePaths) }
    </Carousel>
    }
  </div>;
