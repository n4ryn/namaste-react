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
      <div className="border border-blue-400 flex items-center gap-6 p-4 w-96 m-auto">
        <img className="h-40" src={avatar_url} />

        <div className="text-lg">
          <p>Name: {name}</p>
          <p>Username: {login}</p>
          <p>Location: {location}</p>
        </div>
      </div>
    );
  }
}

export default UserClass;
