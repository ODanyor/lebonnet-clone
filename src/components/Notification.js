import React, { useState, useEffect } from "react";
import { StyledNotification } from "../static/styledComponetns";
// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { clearMessage } from "../redux/actions/productActions";

export const notify = () => {};

const Notification = ({ message, clearMessage, cart }) => {
  const [position, setPosition] = useState("-100%");
  useEffect(() => {
    if (message !== "") {
      setPosition("0");
      setTimeout(() => {
        setPosition("-100%");
        clearMessage();
      }, 3000);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart])

  return <StyledNotification show={position}>{message}</StyledNotification>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  clearMessage: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  clearMessage: () => dispatch(clearMessage())
});

const mapStateToProps = state => ({
  message: state.user.message,
  cart: state.products.cart
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
