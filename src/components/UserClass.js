import React from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

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
      <div className="border border-blue-300 rounded-3xl flex items-center gap-6 p-4 w-96 m-auto">
        <img className="h-40" src={avatar_url} />

        <div className="text-lg">
          <p>Name: {name}</p>
          <p>Username: @{login}</p>
          <p>Location: {location}</p>
          <a
            className="flex items-center gap-2 pt-4 font-bold uppercase text-sm tracking-widest text-sky-400"
            href="https://github.com/n4ryn"
            target="_blank"
          >
            github <BsFillArrowUpRightCircleFill />
          </a>
        </div>
      </div>
    );
  }
}

export default UserClass;
