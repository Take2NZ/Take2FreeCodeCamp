import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Button } from '@freecodecamp/react-bootstrap';

import { hardGoTo as navigate, isSignedInSelector } from '../../../redux';

import './login.css';

const mapStateToProps = createSelector(
  isSignedInSelector,
  isSignedIn => ({
    isSignedIn
  })
);
const mapDispatchToProps = {
  navigate
};

// const createOnClick = (navigate, isSignedIn) => e => {
//   e.preventDefault();
//   gtagReportConversion();
//   if (isSignedIn) {
//     return gatsbyNavigate('/learn');
//   }
//   return navigate(`${apiLocation}/signin`);
// };

function Login(props) {
  const { children, ...restProps } = props;
  return (
    <Button
      bsStyle='default'
      className={(restProps.block ? 'btn-cta-big' : '') + ' signup-btn btn-cta'}
      href='/signin'
      // onClick={createOnClick(navigate, isSignedIn)}
      {...restProps}
    >
      {children || 'Sign In'}
    </Button>
  );
}

Login.displayName = 'Login';
Login.propTypes = {
  children: PropTypes.any,
  isSignedIn: PropTypes.bool,
  navigate: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
