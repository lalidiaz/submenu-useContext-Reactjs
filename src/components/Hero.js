import React from 'react';
import payment from '../assets/card6.png';
import { useGlobalContext } from '../context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Fast and easy payments</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
            repellendus dignissimos aut recusandae quo, dolores dolorem esse
            praesentium, laudantium dolore voluptatum? Quaerat dolorem ex odio
            unde recusandae pariatur esse doloremque.
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={payment} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
