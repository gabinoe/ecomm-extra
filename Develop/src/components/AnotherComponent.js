import React from 'react';
import { connect } from 'react-redux';
import { someAction } from '../store/actions';

const AnotherComponent = ({ dispatch }) => {
  const handleButtonClick = () => {
    // Dispatch an action using the "dispatch" function
    dispatch(someAction());
  };

  return (
    // Your component JSX here
    <button onClick={handleButtonClick}>Click Me</button>
  );
};

export default connect()(AnotherComponent);
