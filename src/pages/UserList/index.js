import React from "react";
import { connect } from "react-redux";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.fetchUsersClickHandler = this.fetchUsersClickHandler.bind(this);
  }

  fetchUsersClickHandler() {
    this.props.fetchUserList();
  }

  renderUsers() {
    let { users = [] } = this.props;
    if (!users || users.length === 0) {
      console.log(users);
      return <div>No users</div>;
    }
    return (
      <ul>
        {users.map(user => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <button onClick={this.fetchUsersClickHandler}>Fetch Users</button>
        {this.renderUsers()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state.UserInfo };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserList: () => {
      dispatch({
        type: "USER_FETCH_REQUESTED"
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
