import React, { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import Propagateloader from "react-spinners/PropagateLoader";
import { black } from "color-name";
import "./App.css";
import { css } from "@emotion/react";
import Header from "./component/Header";
import Products from "./component/Products";
import About from "./component/About";
import Contact from "./component/Contact";

function App() {
  const [loading, setLoading] = useState(false);
  const override = css`
    display: black;
    border-color: red;
    margin-top: 20%;
  `;
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Propagateloader
          color={"#3d2514"}
          loading={loading}
          css={override}
          size={40}
        />
      ) : (
        <>
          <Navbar />
          <Header />
          <Products />
          <About />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
