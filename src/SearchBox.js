import React from "react";

const SearchBox = ({ searchChange }) => {
	return (
		<div>
			<input
				className="pa3 br-pill w-30 ma1 ba b--green bg-lightest-blue"
				type="search"
				placeholder="Search for your RoboFriends..."
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBox;
