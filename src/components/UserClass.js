import React from "react";

// Class which has a render() method which returns a piece of JSX
class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name } = this.props;

    return (
      <div className="user-card">
        {/* <h2>Count: {c ount}</h2> */}
        <h2>Name: {name}</h2>
        <h3>Location: Jaipur</h3>
        <h4>Contact: @n4ryn</h4>
      </div>
    );
  }
}

export default UserClass;
