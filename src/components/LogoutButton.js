import React from "react";
import styled from "styled-components";
// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logOut } from "../redux/actions/userActions";

function LogoutButton(props) {
  const Button = styled.div`
    cursor: pointer;
    padding: 6px 20px;
    border: 1px solid black;
    font-size: 12px;
    color: #000;
    background-color: #fff;
    transition: all 0.4s ease;

    &:hover {
      color: #fff;
      background-color: #000;
    }
  `;
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
