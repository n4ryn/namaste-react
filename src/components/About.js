import { Component } from "react";

import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="body">
        <h1>About Class Component</h1>

        <UserClass name={"First"} location={"Jaipur(Class)"} />
      </div>
    );
  }
}

export default About;
