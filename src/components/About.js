import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="body">
      <h1>About</h1>

      <User name={"Vinay Kumar(Function)"} />
      <UserClass name={"Vinay Kumar(Class)"} />
    </div>
  );
};

export default About;
