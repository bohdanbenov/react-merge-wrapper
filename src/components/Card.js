import React from 'react';
import PropTypes from 'prop-types';

import { MultipleSectionCardComponent } from '../web-components/web-components';
import '../web-components/styles.css';

function Card(props) {
  return (
    <app-multiple-section-card
        card-title={props.cardTitle}
        card-subtitle={props.cardSubtitle}
        card-image-url={props.cardImageUrl}
        card-content={props.cardContent}>
    </app-multiple-section-card>
  );
}

Card.propTypes = {
    cardTitle: PropTypes.string,
    cardSubtitle: PropTypes.string,
    cardImageUrl: PropTypes.string,
    cardContent: PropTypes.string,
}
   
Card.defaultProps = {
    cardTitle: "Title",
    cardSubtitle: "Subtitle",
    cardImageUrl: "https://via.placeholder.com/350x150",
    cardContent: "Test card content",
}

export default Card;
