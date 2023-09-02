import { Component } from "react";

import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showProfile: false,
    };
  }

  componentDidMount() {}

  render() {
    const handleShowProfile = () => {
      if (this?.state?.showProfile === true) {
        this.setState({ showProfile: false });
      } else {
        this.setState({ showProfile: true });
      }
    };

    return (
      <div className="min-h-[calc(100vh_-_152px)]">
        <h1>About Class Component</h1>
        <button onClick={handleShowProfile}>About me</button>

        {this?.state?.showProfile ? (
          <UserClass name={"First"} location={"Jaipur(Class)"} />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default About;
