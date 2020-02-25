import React from "react";
import { StyledNotification } from "../static/styledComponetns";
// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { clearMessage } from "../redux/actions/productActions";

export const notify = () => {};

const Notification = ({ message, clearMessage }) => {
  let position = "-100%";

  if (message !== "") {
    setTimeout(() => {
      position = "-100%";
      clearMessage();
    }, 3000);
    position = "0";
  }

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
  message: state.user.message
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
