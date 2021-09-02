import React from "react";
import { home } from "./data";

function Home() {
  return (
    <div>
      {home.map((item) => {
        const { id, description, name, special, image } = item;
        return (
          <section key={id}>
            <h3>{special}</h3>
            <h1>{name}</h1>
            <p>{description}</p>
            <img src={image} alt="img" />
          </section>
        );
      })}
    </div>
  );
}

export default Home;
