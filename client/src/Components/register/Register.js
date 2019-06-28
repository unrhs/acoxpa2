import React, { Component } from "react";
import LogCard from "../Logcard";
import { register } from "../../services/auth";

class Register extends Component {
  state = {
    auth: {
      name: "",
      lastName: "",
      email: "",
      password: ""
    }
  };

  handleChange = e => {
    const field = e.target.name;
    const { auth } = this.state;
    auth[field] = e.target.value;
    this.setState({ auth });
    console.log(this.state.auth);
  };

  handleSubmit = e => {
    e.preventDefault();

    const { auth } = this.state;

    const { pathname } = this.props.location;
    console.log(pathname);
    pathname === "/login" ? this.onLogin({ auth }) : this.onRegister();
  };

  onLogin = ({ auth }) => {
    console.log("estas en login", auth);
  };

  onRegister = () => {
    const { auth } = this.state;
    register(auth)
      .then(({ token, user }) => {
        console.log("adasd", token, user);
        localStorage.setItem("TOKEN", token);
        localStorage.setItem("USER", JSON.stringify(user));

        this.props.history.push("/");
      })
      .catch(error => {
        return this.setState({ error: error.message });
      });
  };

  render() {
    console.log(this.props);
    const { auth } = this.state;
    return (
      <div>
        <LogCard
          {...auth}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Register;
