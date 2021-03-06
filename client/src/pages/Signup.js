import React from 'react';
import API from '../utils/API';

class Signup extends React.Component {
  state = {
    username: '',
    password: '',
  };

  onSubmit = () => {
    const { history } = this.props;
    var modal = document.getElementById("myModal");
    API.signup(this.state)
      .then(res => {
        modal.style.display = "block";
        // alert("User created!");
        setTimeout(function () {
          history.push("/")
        }, 5000)
      })
      .catch(err => console.log(err));
  };

  onChange = key => e => this.setState({ [key]: e.target.value });

  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <div id="myModal" class="modal">
                  <div class="modal-content">
                    <p>User created!</p>
                  </div>
                </div>
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