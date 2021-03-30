import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

function LoadingScreen() {
	return (
		<div className="loadingScreen__container">
			<PulseLoader />
			<h1> Loading</h1>
		</div>
	);
}

export default LoadingScreen;
