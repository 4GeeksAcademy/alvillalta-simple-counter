//  React
import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from "prop-types";

//  Selección HTML
const root = ReactDOM.createRoot(document.getElementById("root"));

//  Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

//  Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

//  index.css'
import '../styles/index.css';


function SimpleCounter(props) {
  return (
    <div className="bigCounter">
      <div className="calendar">
        <FontAwesomeIcon icon={faClock} />
      </div>
      <div className="four">{props.digitFour % 10}</div>
      <div className="three">{props.digitThree % 10}</div>
      <div className="two">{props.digitTwo % 10}</div>
      <div className="one">{props.digitOne % 10}</div>
    </div>
  );
}

SimpleCounter.propTypes = {
  digitFour: PropTypes.number,
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number
};

let counter = 0;

setInterval(function() {
  const four = Math.floor(counter / 1000);
  const three = Math.floor(counter / 100);
  const two = Math.floor(counter / 10);
  const one = Math.floor(counter / 1);
  counter++;
  root.render(
    <SimpleCounter digitFour={four} digitThree={three} digitTwo={two} digitOne={one} />
    );
  }, 1000);

ReactDOM.createRoot(root).render(<SimpleCounter />);
