import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { posts } from "./data/post";
import Hero from "./photos/Hero";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-container">
      <Hero />
      <h1 className="category-titel">LATEST</h1>
      <div className="latest">
        {posts.map((post) => (
          <Link to={`/post/${post.id}`}>
            <div key={post.id} className="card">
              <img className="card-img" src={post.thumbnail} alt="pic"></img>
              <div className="info">
                <small>
                  {post.date}
                  {post.brand}
                </small>
                <hr></hr>
                <h2>{post.title}</h2>
                <p>{post.subtitle}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <hr></hr>

      <h1 className="category-titel" id="skateboard">
        SKATEBOARD
      </h1>
      <div className="skateboard">
        {posts.map((post) => {
          if (post.tag === "skateboard") {
            return (
              <Link to={`/post/${post.id}`}>
                <div key={post.id} className="card">
                  <img
                    className="card-img"
                    src={post.thumbnail}
                    alt="pic"
                  ></img>
                  <div className="info">
                    <small>
                      {post.date}
                      {post.brand}
                    </small>
                    <hr></hr>
                    <h2>{post.title}</h2>
                    <p>{post.subtitle}</p>
                  </div>
                </div>
              </Link>
            );
          } else {
            return null;
          }
        })}
      </div>
      <hr></hr>
      <h1 className="category-titel" id="snowboard">
        SNOWBOARD
      </h1>
      <div className="skateboard">
        {posts.map((post) => {
          if (post.tag === "skateboard") {
            return (
              <Link to={`/post/${post.id}`}>
                <div key={post.id} className="card">
                  <img
                    className="card-img"
                    src={post.thumbnail}
                    alt="pic"
                  ></img>
                  <div className="info">
                    <small>
                      {post.date}
                      {post.brand}
                    </small>
                    <hr></hr>
                    <h2>{post.title}</h2>
                    <p>{post.subtitle}</p>
                  </div>
                </div>
              </Link>
            );
          } else {
            return null;
          }
        })}
      </div>
      <hr></hr>
      <h1 className="category-titel" id="other">
        Other
      </h1>
      <div className="skateboard">
        {posts.map((post) => {
          if (post.tag === "skateboard") {
            return (
              <Link to={`/post/${post.id}`}>
                <div key={post.id} className="card">
                  <img
                    className="card-img"
                    src={post.thumbnail}
                    alt="pic"
                  ></img>
                  <div className="info">
                    <small>
                      {post.date}
                      {post.brand}
                    </small>
                    <hr></hr>
                    <h2>{post.title}</h2>
                    <p>{post.subtitle}</p>
                  </div>
                </div>
              </Link>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Home;
