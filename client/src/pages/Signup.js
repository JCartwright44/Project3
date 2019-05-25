import React, { Component } from 'react';

import API from '../utils/API';
// import { Redirect } from 'react-router-dom';

class Signup extends React.Component {
  state = {
    username: '',
    password: '',
  };

  // componentDidMount() {
  //   const token = localStorage.getItem('current_user_token');

    // if (token) {
    //   API.validateToken(token)
    //     .then(() => this.props.history.push('/'))
    //     .catch(() => localStorage.removeItem('current_user_token'));
    // }
  // }

  onSubmit = () => {
    const { history } = this.props;
    API.signup(this.state)
      .then(res => {
        // localStorage.setItem('current_user_token', res.data.token)
        alert("User created!");
        history.push("/");
      })
      .catch(err => console.log(err));
  };

  onChange = key => e => this.setState({ [key]: e.target.value });

  render() {
    return (
      <div>
        <h1>Sign up</h1>
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
        <div>
        <button
          className="btn btn-pr"
          onClick={this.onSubmit}
          disabled={!this.state.username || !this.state.password}
        >
          signup
        </button>
        </div>
      </div>
    );
  }
}

export default Signup;