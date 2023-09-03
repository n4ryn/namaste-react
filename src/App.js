import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import UserContext from "./utils/UserContext";

import appStore from "./redux/appStore";

/**
 *
 * - Types of Testing a dev can do:
 *      1. Unit Testing
 *      2. Integration Testing
 *      3. End to End Testing (E2E Testing)
 *
 * - Setting up Testing in our App
 *      1. Installing React Testing Library
 *      2. Installing Jest
 *      3. Installing Babel dependencies
 *      4. Configure Babel (.babel.config.js)
 *      5. Configure Parcel Config file to disable default babel transpilation (.parcelrc)
 *      6. Jest Configuration (npx jest --init)
 *      7. Install jsdom library (for jest version 28 and above)
 *      8. Install @babel/preset-react - to make JSX work in test cases
 *      8. Configure @babel/preset-react inside babel config
 *      8. Install @testing-library/jest-dom
 *
 */

const App = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const data = {
      name: "Vinay Kumar",
    };

    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="m-auto max-w-6xl">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

export default App;
