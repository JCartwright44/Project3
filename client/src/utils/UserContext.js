import React from 'react';

const userString = sessionStorage.getItem('user');
const initialUser = userString ? JSON.parse(userString): null;

const UserContext = React.createContext();

export class UserProvider extends React.Component {
    state = {
      currentUser: initialUser
    }
  
    onLogin = (currentUser) => {
      this.setState({ currentUser });
      sessionStorage.setItem('user', JSON.stringify(currentUser));
    }
  
    onLogout = () => {
        this.setState({
            currentUser: null
        })
        sessionStorage.removeItem('user')
    }

    render(){
      return (
        <UserContext.Provider value={{
          user: this.state.currentUser,
          onLogin: this.onLogin,
          onLogout: this.onLogout
        }}>
          {this.props.children}
        </UserContext.Provider>
      );
    }
  }
  

export default UserContext;