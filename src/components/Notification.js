import React, { useState, useEffect } from "react";
import { StyledNotification } from "../static/styledComponetns";
// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { clearMessage } from "../redux/actions/productActions";

export const notify = () => {};

const Notification = ({ message, clearMessage, cart }) => {
  const [properties, setProperties] = useState({
    position: "-100%",
    backgroundColor: "green"
  });
  useEffect(() => {
    if (message !== "") {
      setProperties({
        position: "0",
        backgroundColor: message === "Product was deleted." ? "red" : "green"
      });
      setTimeout(() => {
        setProperties({
          position: "-100%"
        });
        clearMessage();
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  return <StyledNotification show={properties}>{message}</StyledNotification>;
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
