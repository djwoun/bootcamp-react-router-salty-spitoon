import React from "react";
import { Link } from "react-router-dom";
const Spitoon = () => (
  <section class="destination">
    <h1>Welcome to the club. Here's a shot... of milk</h1>
    <img src="/salty-spitoon.png" alt="Salty spitoon" />

    <ul>
      <li>
        <Link to="/Home">HOME WHAAA(</Link>
      </li>
      <li>
        <Link to="/Weenie">I am a weenie!</Link>
      </li>
      <li>
        <Link to="/Superweenie">I'm not a weenie!</Link>
      </li>
    </ul>
  </section>
);

export default Spitoon;
