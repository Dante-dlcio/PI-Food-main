import React from "react";
import { Link } from "react-router-dom";
 

export function LandingPage() {
  return (
    <div>
      <div>
        <h1>WELCOME TO FOODGLE</h1>
      </div>
      <div>
        <Link to="/home">
          <button>home</button>
        </Link>
      </div>

      <p>
        This Individual Project was created by Erio Donalicio for Henry Full
        Stack Developer Academy, hope you like it.
      </p>
    </div>
  );
}