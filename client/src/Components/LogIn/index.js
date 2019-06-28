import React, { Component } from "react";
import LogCard2 from "../../Components/LogCard2";
import { login } from "../../services/auth";

class LogIn extends Component {
  state = {
    auth: {
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
    pathname === "/login" ? this.onLogin(auth) : this.onRegister();
  };

  onLogin = auth => {
    console.log("estas en login", auth);
    login(auth)
      .then((token, user) => {
        localStorage.setItem("TOKEN", token);
        localStorage.setItem("USER", JSON.stringify(user));
        this.props.history.push("/business");
      })
      .catch(e => console.log(e));
  };

  onRegister = () => {
    const { auth } = this.state;
    login(auth)
      .then(({ token, user }) => {
        console.log("adasd", token, user);
        localStorage.setItem("TOKEN", token);
        localStorage.setItem("USER", JSON.stringify(user));
        this.props.setUser(user);
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
        <LogCard2
          {...auth}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default LogIn;

// import React, { Component } from "react";
// import LogCard2 from "../../Components/LogCard2";

// const LogIn = () => {
//   return <LogCard2 />;
// };

// export default LogIn;
