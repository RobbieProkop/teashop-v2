import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./styles/globals.scss";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <div className="body-container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
