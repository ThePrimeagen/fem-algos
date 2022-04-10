import React from "react";
import Gh from "./github";
import Tw from "./twitter";
import Twitch from "./twitch";

export default function Footer({ twitter, twitch, youtube }) {
  return (
    <footer className="footer">
      <ul className="socials">
        {twitter ? (
          <li className="social">
            <a href={`https://twitter.com/${twitter}`}>
              <Tw />
            </a>
          </li>
        ) : null}
        {twitch ? (
          <li className="social">
            <a href={`https://twitch.tv/${twitch}`}>
              <Twitch />
            </a>
          </li>
        ) : null}
        {youtube ? (
          <li className="social">
            <a href={`https://youtube.com/${youtube}`}>
              <Twitch />
            </a>
          </li>
        ) : null}
        <li className="social">
          <div className="terms">
            <p>Content Licensed Under CC-BY-NC-4.0</p>
            <p>Code Samples and Excercises Licensed Under Apache 2.0</p>
            <p>
              Site Designed by{" "}
              <a href="https://www.alexdanielson.com/">Alex Danielson</a>
            </p>
          </div>
        </li>
      </ul>
    </footer>
  );
}
