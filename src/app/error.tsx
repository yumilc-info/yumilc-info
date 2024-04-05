"use client"; // Error components must be Client components

import { useEffect } from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div>
			<h1>Error</h1>
			<p>{error.message}</p>
			<button onClick={reset}>Reset</button>
		</div>
	);
}
