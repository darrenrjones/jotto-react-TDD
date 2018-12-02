//functional comp not connected to redux
//receive 'success' value from parent via props
//show congrats message is success is true

import React from 'react';

export default (props) => {
  if (props.success) {
    return (
      <div data-test='comp-congrats'>
        <span data-test='congrats-message'>
          Congratulations! You guessed the word!!!!
        </span>
      </div>
    );
  } else {
    return (
      <div data-test='comp-congrats'></div>
    );
  }
}