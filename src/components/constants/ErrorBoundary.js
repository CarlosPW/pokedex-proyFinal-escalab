import React from "react";

const ErrorFallback = ({ error }) => {
	return (
		<div>
			<p>Something went wrong:</p>
			<pre>{error.message}</pre>
		</div>
	);
};
export default ErrorFallback;
