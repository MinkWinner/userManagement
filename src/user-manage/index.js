import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import dataUser from "./data.json";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: dataUser,
    };
  }

  _findIndex = (id) => {
    return this.state.listUser.findIndex((list) => {
      return list.id === id;
    });
  };

  handleDel = (data) => {
    const index = this._findIndex(data.id);
    let listUser = [...this.state.listUser];
    listUser.splice(index, 1);
    this.setState({ listUser });
  };

  render() {
    const { listUser } = this.state;
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Add User
          </button>
        </div>
        <Users dataUser={listUser} handleDel={this.handleDel} />
        <Modal />
      </div>
    );
  }
}

export default Home;
