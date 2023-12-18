import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { posts } from "./data/post";

const Postpage = () => {
  const { id } = useParams();
  let [post, setPost] = useState(null);

  useEffect(() => {
    let post = posts.find((post) => post.id === parseInt(id));
    if (post) {
      setPost(post);
      console.log(post);
    }
  }, [id]);

  if (!post) return null;

  return (
    <>
      <article className="singelpost">
        <div>
          <img className="card-img" src={post.thumbnail} alt="pic"></img>
          <div className="info-singel">
            <small> {post.date}</small>
            <small className="brand"> {post.brand}</small>
            <hr></hr>
            <h2>{post.title}</h2>
            <h3>{post.subtitle}</h3>
            <p>{post.desc}</p>
            <hr></hr>
            <div key={post.img.id}>
              {post.img.map((images) => {
                console.log(images);
                return (
                  <div className="image-container">
                    <img alt="logo" src={images.src}></img>
                    <small className="images">{images.desc}</small>
                  </div>
                );
              })}
            </div>
          </div>
          <Link className="button-container" to={"/"}>
            <button className="button">Back</button>
          </Link>
        </div>
      </article>
    </>
  );
};

export default Postpage;
