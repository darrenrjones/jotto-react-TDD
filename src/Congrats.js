//functional comp not connected to redux
//receive 'success' value from parent via props
//show congrats message is success is true

import React from 'react';
import PropTypes from 'prop-types';

export const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test='comp-congrats' className='alert alert-success'>
        <span data-test='congrats-message'>
          Congratulations! You guessed the word!!!!
        </span>
        {/* Restart button comonenthere */}

      </div>
    );
  } else {
    return (
      <div data-test='comp-congrats'>
      </div>
    );
  }
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;