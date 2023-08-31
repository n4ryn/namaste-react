import React from "react";

/**
 *
 * ------ MOUNTING ------
 *
 * - Constructor (dummy)
 * - Render (dummy)
 *      <HTML dummy>
 * - Component Did Mount
 *      <API Call>
 *      <this.setState> -> State Variable is updated
 *
 * ------ UPDATE ------
 *
 * - Render (API Data)
 *      <HTML (new API data)>
 * - Component Did Update
 *
 */

// Class which has a render() method which returns a piece of JSX
class UserClass extends React.Component {
  // 1 Firstly Constructor will be called
  constructor(props) {
    super(props);
    this.state = {
      // count: 0,
      userInfo: {
        name: "Default",
        // login: "Default",
        location: "Default",
        // avatar_url: "Default",
      },
    };

    // console.log(`Child ${this.props.name} Constructor called`);
  }

  // 3 Thirdly componentDidMount will be called
  // this is called when the component is mounted on the web page
  // componentDidMount is used to make api calls similar to useEffect
  async componentDidMount() {
    // console.log(`Child ${this.props.name} Component Did Mount`);

    const data = await fetch("https://api.github.com/users/n4ryn");
    const json = await data.json();

    // console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentWillUnmount() {
    console.log(`Child ${this.props.name} Component Will Mount`);
  }

  // 2 Secondly Render will be called
  render() {
    const { name, location, avatar_url, login } = this?.state?.userInfo;
    // console.log(`Child ${this.props.name} Render called`);

    console.log(this?.state?.userInfo);
    return (
      <div className="user-card">
        {/* <h2>Count: {this.state.count}</h2>
        <button
          // onClick={() => {
            // Never update state variable directly
            // this.state.count = this.state.count + 1 ❌
            // this.setState({
            //   count: this.state.count + 1,
            //   // count2: this.state.count2 + 1,
            // });

            // Also don't create multiple setState handlers instead batch all states in one setState
            // this.setState({
            //   count2: this.state.count2 + 1,
            // });
          // }}
        >
          Increase Count
        </button> */}
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h2>Username: {login}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @n4ryn</h4>
      </div>
    );
  }
}

export default UserClass;
