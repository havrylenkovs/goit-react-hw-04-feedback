import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const buttonStyle = {
  marginRight: '20px',
  border: 0,
  lineHeight: 2.5,
  padding: '10px',
  fontSize: '2rem',
  textAlign: 'center',
  color: 'fff',
  backgroundColor: 'rgba(fff00)',
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          style={buttonStyle}
          key={nanoid()}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      option: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default FeedbackOptions;
