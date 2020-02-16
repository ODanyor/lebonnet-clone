import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { signUp } from "../../redux/actions/userActions";

class SignUpSide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.signUp(this.state, this.props.history);
  }
  render() {
    return (
      <div className="RegisterSide">
        <div className="FormContainer">
          <form onSubmit={this.handleSubmit} className="Form RegForm">
            <div className="RegisterTitle">New customers</div>
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              value={this.state.confirmPassword}
              onChange={this.handleInputChange}
            />
            <button>Create an account</button>
          </form>
        </div>
      </div>
    );
  }
}

SignUpSide.propTypes = {
  signUp: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
  signUp: (credentials, history) => dispatch(signUp(credentials, history))
});

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpSide);
