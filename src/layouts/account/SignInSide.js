import React from "react";
// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { signIn } from "../../redux/actions/userActions";

class SignInSide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
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
    const history = this.props.history;
    this.props.signIn(this.state, history);
  }
  render() {
    return (
      <div className="LoginSide">
        <div className="Gradient">
          <div className="FormContainer">
            <form onSubmit={this.handleSubmit} className="Form LogForm">
              <div className="LoginTitle">Registered customers</div>
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
              <button>Log in</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

SignInSide.propTypes = {
  signIn: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
  signIn: (credentials, history) => dispatch(signIn(credentials, history))
});

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInSide);
