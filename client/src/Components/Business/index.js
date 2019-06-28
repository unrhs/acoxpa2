import React, { Component } from "react";
import { getAllBus } from "../../services/business";

class Busisness extends Component {
  state = {
    business: []
  };
  componentWillMount() {
    this.getAllBusiness();
  }

  getAllBusiness = () => {
    getAllBus()
      .then(res => this.setState({ business: res.business }))
      .catch(err => console.log(err));
  };
  render() {
    let { business } = this.state;
    return (
      <div style={{ height: "90vh" }}>
        {business.length ? (
          business.map((data, i) => (
            <div style={{ marginTop: 100 }}>Hola soy busisness</div>
          ))
        ) : (
          <div>No tengo nada xD</div>
        )}
      </div>
    );
  }
}

export default Busisness;
