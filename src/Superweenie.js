import React from 'react'
import { Link } from "react-router-dom"


const SuperWeenie = () => (
  <section class="destination">
    <h1>Welcome to SUPER weenie hut juniors</h1>
    <img src="/superweenie.png" alt="Weenie" />

    <ul>
      <li>
        <Link to="/Home">HOME WHAAA(</Link>
      </li>
      <li>
        <Link to="/Weenie">I am a weenie!</Link>
      </li>
      <li>
        <Link to="/Spitoon">💪 💪 💪</Link>
      </li>
    </ul>
  </section>
);

export default SuperWeenie
