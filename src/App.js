import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import UserContext from "./utils/UserContext";

const App = () => {
  const [userName, setUserName] = useState("");

  // Authentication
  useEffect(() => {
    // Making API call and send username and password
    const data = {
      name: "Vinay Kumar",
    };

    setUserName(data.name);
  }, []);

  return (
    // Providing context to whole app
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="m-auto max-w-6xl">
        {/* Providing context to <Header/> component only */}
        {/* <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}>
          <Header />
        </UserContext.Provider> */}

        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

export default App;
