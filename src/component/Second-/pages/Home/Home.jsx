import React from "react";
import "./Home.css";
import myphoto from "../Home/my.jpeg";
import Layout from "../../Layout/Layout";

function Home() {
  return (
    <>
      <Layout>
        <main className="main-Home">
          <section className="total">
            <div className="twoside ">
              <div className="title ">
                <div className="right">
                  <h2 className="text-body-emphasis fs-3 ">Hi, I'm</h2>
                  <h1 className="name fs-1">SURYA B</h1>
                  <h4 className="pt-1 fs-3">MERN STACK DEVELOPER </h4>
                  <p className="fs-5">
                    I build a responsive and user friendly websites.
                  </p>
                </div>
              </div>
              <div className="left p-0 m-0 ">
                <img className="myimg" src={myphoto} />
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}

export default Home;
