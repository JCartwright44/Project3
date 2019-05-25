import React from 'react';
import UserContext from "../utils/UserContext"
import API from '../utils/API';
// import { Link } from 'react-router-dom';
// import RandomHomeComponent from '../components/RandomHomeComponent';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    error: null,
    currentUser: null
  };

  onChange = key => e => this.setState({ [key]: e.target.value });

  onSubmit = (onLogin) => {
    const { history } = this.props;
    const { username, password } = this.state
    API.login({ username, password })
      // .then(res => localStorage.setItem('current_user_token', res.data.token))
      .then(res => {
        onLogin(res.data)
        history.push("/dashboard");
      })
      .catch(err => {
        this.setState({
          error: "Username or Password not matching. Please try again"
        })
      })
  };



  render() {
    const { username, password, error } = this.state;

    return (
      <UserContext.Consumer>
      {({onLogin}) => (
      <div>
      <h1>Login</h1>
      <div>
      <label>Username </label>
      <input
        autoComplete="off"
        type="text"
        value={this.state.username}
        label="username"
        onChange={this.onChange('username')}
      />
      </div>
      <div>
      <label>Password </label>
      <input
        type="password"
        value={this.state.password}
        label="password"
        onChange={this.onChange('password')}
      />
      </div>
      {this.state.error ? (
        <span className="alert">{this.state.error}</span>
      ): null }
      <div>
      <button
        className="btn btn-primary"
        onClick={() => this.onSubmit(onLogin)}
        disabled={!Boolean(this.state.username && this.state.password)}
      >
        Login
      </button>
      </div>
    </div>

        )}

      </UserContext.Consumer>
    );
  }
}

export default Login;