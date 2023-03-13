import React from "react"; //Main React.js library
import PropTypes from "prop-types";


export function Card (props) {
	return (
		<div className="card h-100 mb-sm-4 mb-md-4 mb-lg-4">
			<img
				className="card-img-top img"
				src={props.imageUrl}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title text-center">{props.cardTitle}</h5>
				<p className="card-text text-center">{props.cardDescription}</p>
			</div>
			<div className="card-footer text-muted">
				<div className="text-center">
					<a
						href={props.buttonUrl}
						target="_blank"
						rel="noreferrer"
						className="btn btn-primary">
						{props.buttonLabel}
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	imageUrl: PropTypes.string,
	cardTitle: PropTypes.string,
	cardDescription: PropTypes.string,
	buttonUrl: PropTypes.string,
	buttonLabel: PropTypes.string
};
export default Card;