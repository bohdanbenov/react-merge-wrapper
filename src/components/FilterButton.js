import React from "react";
import PropTypes from 'prop-types';

function FilterButton(props) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
    >
      <span>{props.name}</span>
    </button>
  );
}

FilterButton.propTypes = {
  name: PropTypes.string
}
   
FilterButton.defaultProps = {
  name: 'Button Name'
}

export default FilterButton;
