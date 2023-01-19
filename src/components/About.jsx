import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">ABOUT US</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur dicta earum corrupti sapiente debitis laudantium
              consequatur beatae? Inventore laudantium corporis aliquam, dolorem
              excepturi possimus suscipit in nostrum ab nihil error veniam
              placeat cumque? Animi consectetur explicabo nemo iusto amet ipsa
              consequatur inventore facilis sunt, voluptatibus velit similique
              quod atque illo voluptatem quo. Eaque est nemo, quos tempora velit
              beatae ea consectetur deserunt saepe aliquid repellat qui, cumque
              recusandae excepturi, nam commodi. Asperiores, labore. Doloribus
              quasi fuga, optio explicabo sed earum et mollitia quae maiores
              officia illo vero. Voluptas, in! Quibusdam soluta hic minus
              tenetur dolores ducimus sapiente eum explicabo eaque?
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center ">
            <img
              src="/assets/images/aboutUs.png"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
