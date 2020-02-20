import React, { useState } from "react";
import styled from "styled-components";
// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

function Notification(props) {
  const Notification = styled.div`
    position: fixed;
    width: 100%;
    height: 40px;
    background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;

    transform: translateY(${props => props.show});
    transition: all 0.4s ease;
    z-index: 1100;
  `;
  const [seconds, setSeconds] = useState(0);
  let show = "-100%";
  if (props.message !== "") {
    show = "0";
    let interval = null;
    interval = setInterval(() => {
      setSeconds(prevState => prevState + 1);
    }, 1000);
    if (seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }
  return <Notification show={show}>{props.message}</Notification>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  message: state.user.message
});

export default connect(mapStateToProps)(Notification);
