import { useState } from "react";

// Function that returns a piece of JSX
const User = (props) => {
  const [count, setCount] = useState(0);
  const { name } = props;
  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      <h2>Name: {name}</h2>
      <h3>Location: Jaipur</h3>
      <h4>Contact: @n4ryn</h4>
    </div>
  );
};

export default User;
