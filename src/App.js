import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="m-auto max-w-6xl">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
