import React, { Component } from "react";

class UserItem extends Component {
  render() {
    const { fullname, username, email, phoneNumber, type } =
      this.props.dataUser;
    return (
      <tr>
        <td>{fullname}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>{phoneNumber}</td>
        <td>{type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.handleDel(this.props.dataUser);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default UserItem;
