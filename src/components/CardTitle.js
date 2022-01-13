import React from 'react';
import PropTypes from 'prop-types';

import { CardTitleComponent } from '../web-components/web-components';
import '../web-components/styles.css';

function CardTitle(props) {
  return (
    <app-card-title
        card-title={props.cardTitle}>
    </app-card-title>
  );
}

CardTitle.propTypes = {
    cardTitle: PropTypes.string,
}
   
CardTitle.defaultProps = {
    cardTitle: "Title",
}

export default CardTitle;
