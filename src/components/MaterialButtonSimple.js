import React from 'react';
import PropTypes from 'prop-types';

import { MaterialButtonComponent } from '../web-components/web-components';
import '../web-components/styles.css';

function MaterialButtonSimple(props) {
  return (
    <app-material-button btn-title={props.name} btn-color={props.color}></app-material-button>
  );
}

MaterialButtonSimple.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string
}
   
MaterialButtonSimple.defaultProps = {
  name: 'Button Name',
  color: 'warn'
}

export default MaterialButtonSimple;
