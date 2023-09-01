import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Default",
        login: "Default",
        location: "Default",
        avatar_url: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/n4ryn");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentWillUnmount() {}

  render() {
    const { name, location, avatar_url, login } = this?.state?.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h2>Username: {login}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
