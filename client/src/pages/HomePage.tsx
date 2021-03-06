import * as React from "react";

import graphic from "images/graphic.svg";
import breakSvg from "images/break.svg";
import solanaSvg from "images/solana.svg";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <div className="container home-page">
        <div className="d-flex min-vh-100 align-items-center px-5">
          <div className="row">
            <div className="col-12 mt-4">
              <img
                src={breakSvg}
                alt="break"
                className="img-fluid mr-lg-4 mb-lg-0 mb-4"
              />
              <img src={solanaSvg} alt="solana" className="img-fluid" />
            </div>

            <div className="col-12 col-lg-8">
              <p className="introduction my-5">
                Solana is the world’s most performant blockchain. Currently it
                can handle 50,000 transactions per second with 400 millisecond
                block times. This is enough to handle the global capacity of
                Visa. To see just how fast it is, let’s see if you can break it.
              </p>
            </div>
            <div className="col-12">
              <Link
                className="btn btn-pink px-6 py-3 mb-5 text-uppercase"
                to="/game"
              >
                Play the game
              </Link>
            </div>
          </div>
        </div>
        <img className="graphic" src={graphic} alt="abstract graphic" />
      </div>
    );
  }
}
