import { Component } from "react";

import UserClass from "./UserClass";

/**
 * - Parent constructor called
 * - Parent render called
 *
 *     - Child 1 Constructor called
 *     - Child 1 Render called
 *
 *     - Child 2 Constructor called
 *     - Child 2 Render called
 *
 *     - Child 1 Component Did Mount
 *     - Child 2 Component Did Mount
 *
 * - Parent Component Did Mount
 */

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent constructor called");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent render called");

    return (
      <div className="body">
        <h1>About Class Component</h1>

        <UserClass name={"First"} location={"Jaipur(Class)"} />
      </div>
    );
  }
}

export default About;
