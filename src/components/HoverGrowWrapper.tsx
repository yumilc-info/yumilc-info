"use client";
import { useState } from "react";
import { css } from "../../styled-system/css";

const hoverStyle = css({
	transform: "scale(1.05)",
	transformOrigin: "center",
	transition: "transform 0.1s ease-in-out",
});

const normalStyle = css({
	transition: "transform 0.1s ease-in-out",
});

export const HoverGrowWrapper = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={isHovered ? hoverStyle : normalStyle}
		>
			{children}
		</div>
	);
};
