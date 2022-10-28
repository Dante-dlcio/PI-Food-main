import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css'


export function LandingPage() {
  return (
    <div className="background">
      <div className="container-h1">
        <h1 className="welcome">Welcome to the Recipes DB</h1>
      </div>
      <div className="container-button">
        <Link to="/home">
          <button className="Button-Home">Home</button>
        </Link>
      </div>

      <p className="footer">
        This Individual Project was created by Erio Donalicio for Henry Full
        Stack Developer Academy, hope you like it.
      </p>
    </div>
  );
}