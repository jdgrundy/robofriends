import React from "react";

const Card = ({ id, name, email }) => {
	return (
		<div className="bg-light-green dib br4 pa2 ma3 grow tc bw2 shadow-4 ">
			<img src={`https://robohash.org/${id}?150x150`} alt="Profile" />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;
