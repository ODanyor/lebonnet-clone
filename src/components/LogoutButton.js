import React from "react";
import { Button } from "../static/styledComponetns";
// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logOut } from "../redux/actions/userActions";

function LogoutButton(props) {
  return <Button onClick={props.logOut}>logout</Button>;
}

LogoutButton.propTypes = {
  logOut: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);
