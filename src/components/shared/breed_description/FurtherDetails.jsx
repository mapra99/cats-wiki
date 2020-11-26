import React from 'react';

import QualitativeAttr from './QualitativeAttr';
import QuantitativeAttr from './QuantitativeAttr';

import '../../../styles/components/shared/breed_description/FurtherDetails.scss';

const FurtherDetails = ({
  temperament,
  origin,
  life_span,
  adaptability,
  affection_level,
  child_friendly,
  grooming,
  health_issues,
  intelligence,
  social_needs,
  stranger_friendly
}) => (
  <div className="further-details">
    <QualitativeAttr name="Temperament:" value={temperament} />
    <QualitativeAttr name="Origin:" value={origin} />
    <QualitativeAttr name="Life Span:" value={`${life_span} years`} />

    <QuantitativeAttr name="Adaptability:" value={adaptability} />
    <QuantitativeAttr name="Affection level:" value={affection_level} />
    <QuantitativeAttr name="Child Friendly:" value={child_friendly} />
    <QuantitativeAttr name="Grooming:" value={grooming} />
    <QuantitativeAttr name="Health Issues:" value={health_issues} />
    <QuantitativeAttr name="Intelligence:" value={intelligence} />
    <QuantitativeAttr name="Social needs:" value={social_needs} />
    <QuantitativeAttr name="Stranger friendly:" value={stranger_friendly} />
  </div>
);

export default FurtherDetails;
