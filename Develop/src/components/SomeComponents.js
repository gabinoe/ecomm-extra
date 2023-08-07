import React from 'react';
import { connect } from 'react-redux';

const SomeComponent = ({ categories }) => {
  // Access categories from Redux store through props
  return (
    // Your component JSX here
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(SomeComponent);
