import React from "react";
import About from "./components/home/about";
import Banner from "./components/home/banner";
import Blog from "./components/home/blog";
import Customer from "./components/home/customer";
import Footer from "./components/home/footer";
import Knowsign from "./components/home/knowsign";
import Loader from "./components/home/loader";
import Navbar from "./components/home/navbar";
import Overview from "./components/home/overview";
import Service from "./components/home/service";
import Whychoose from "./components/home/whychoose";
import Zodiacsign from "./components/home/zodiacsign";

function App() {
  return (
    <React.Fragment>
      <body>
        <div className="as_main_wrapper">
          <Loader />
          <Navbar />
          <Banner />
          <About />
          <Service />
          <Zodiacsign />
          <Knowsign />
          <Customer />
          <Whychoose />
          <Blog />
          <Overview />
          <Footer />
        </div>
      </body>
    </React.Fragment>
  );
}

export default App;
