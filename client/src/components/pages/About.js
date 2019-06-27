import React from "react";

const About = () => {
  return (
    <div>
      <h1>About This App</h1>
      <p className="my-1">
        A full-stack React app using the MERN stack for keeping contacts. User's
        login information and contacts are stored on a secure cloud database.
        Created by Noah Lincke as part of a tutorial by Brad Traversy.
      </p>
      <p className="bg-dark p">
        <strong>Version:</strong> 1.0.0
      </p>
    </div>
  );
};

export default About;
