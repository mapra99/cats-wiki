import React from 'react';

const ResponsiveImage = ({breakpointSize, imageLarge, imageMedium, imageSmall, altAttribute}) => (
  <picture>
    <source media={`(min-width: ${breakpointSize})`} srcSet={`${imageMedium} 1x, ${imageLarge} 2x`} />
    <source media={`(max-width: ${breakpointSize})`} srcSet={`${imageSmall} 1x, ${imageMedium} 2x`} />
    <img src={imageMedium} alt={altAttribute} />
  </picture>
)

export default ResponsiveImage;
