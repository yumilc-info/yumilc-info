import Image from "next/image";
import { css } from "../../styled-system/css";

const BackGroundStyle = css({
	position: "absolute",
	zIndex: "-1000",
	width: "100%",
	height: "100%",
	top: "70px",
	left: "0",
	overflowX: "hidden",
});

export const BackGround = (): JSX.Element => {
	return (
		<div className={BackGroundStyle}>
			<div
				className={css({
					position: "absolute",
					width: "30dvw",
					height: "30dvw",
					top: "-6.5dvw",
					left: "-4dvw",
				})}
			>
				<Image src="/decoration/blue.svg" alt="blue" fill sizes="100vw" />
			</div>
			<div
				className={css({
					position: "absolute",
					width: "33dvw",
					height: "33dvw",
					top: "-6.5dvw",
					left: "67dvw",
				})}
			>
				<Image src="/decoration/green.svg" alt="green" fill sizes="100vw" />
			</div>
			<div
				className={css({
					position: "absolute",
					width: "32dvw",
					height: "32dvw",
					top: "29dvw",
					left: "68vw",
				})}
			>
				<Image src="/decoration/red.svg" alt="red" fill sizes="100vw" />
			</div>
			<div
				className={css({
					position: "absolute",
					width: "33dvw",
					height: "33dvw",
					top: "29dvw",
					left: "-4dvw",
				})}
			>
				<Image src="/decoration/gray.svg" alt="gray" fill sizes="100vw" />
			</div>
		</div>
	);
};
