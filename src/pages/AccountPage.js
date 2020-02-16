import React from "react";
import "../static/styles/AccountPage.css";
// Layouts
import SignInSide from "../layouts/account/SignInSide";
import SignUpSide from "../layouts/account/SignUpSide";
import Authenticated from "../layouts/account/Authenticated";
// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AccountPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        {this.props.user.authenticated ? (
          <Authenticated />
        ) : (
          <>
            <div className="AccountContainer">
              <SignInSide history={this.props.history} />
              <SignUpSide history={this.props.history} />
            </div>
          </>
        )}
      </>
    );
  }
}

AccountPage.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(AccountPage);
