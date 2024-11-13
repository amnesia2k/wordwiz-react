import Navbar from "./components/common/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
