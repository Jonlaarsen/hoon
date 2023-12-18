import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Postpage from "./Postpage";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div id="page-wrap">
        <Header />

        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/post/:id" element={<Postpage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
