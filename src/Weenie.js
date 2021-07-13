import React from "react";
import { Link } from "react-router-dom"
const Weenie = () => (
  <section class="destination">
    <h1>Welcome to weenie hut juniors</h1>
    <img src="/weenie.png" alt="Weenie" />

    <ul>
      <li>
        <Link to="/Home">HOME WHAAA(</Link>
      </li>
      <li>
        <Link to="/Superweenie">I'm not a weenie!</Link>
      </li>
      <li>
        <Link to="/Spitoon">💪 💪 💪</Link>
      </li>
    </ul>
  </section>
);

export default Weenie;
