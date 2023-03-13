import React from "react";
import PropTypes from "prop-types";

export function Jumbotron(props) {
  return (
    <div className="jumbotron bg-secondary rounded-3 p-4 mt-3 mb-3">
      <h1 className="display-4">{props.title}</h1>
      <p className="lead">{props.description}</p>
      <a
        className="btn btn-primary btn-lg"
        href={props.buttonURL}
        role="button"
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.buttonLabel}
      </a>
    </div>
  );
}

Jumbotron.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonURL: PropTypes.string,
};

Jumbotron.defaultProps = {
  title: "Welcome to React",
  description: 'ipsum dolor sit amet consectetur adipisicing elit. Ab expedita ea temporibus consequatur, voluptates illo harum dolores eos sapiente maiores iure eius. Atque aperiam reiciendis perferendis quasi officia veniam aspernatur minus fugit sit maxime iste dignissimos voluptatibus voluptas velit nobis quam perspiciatis, dicta distinctio sequi',
  buttonLabel: "Learn more",
  buttonURL: "https://reactjs.org",
};
export default Jumbotron;


