import Image from "next/image";
import { css } from "../../styled-system/css";

const BackGroundStyle = css({
	position: "absolute",
	zIndex: "-1000",
	width: "100%",
	height: "100%",
	top: "0",
	left: "0",
});

export const BackGround = (): JSX.Element => {
	return (
        <div className={BackGroundStyle}>
			<div
				className={css({
					position: "absolute",
					width: "20dvw",
					height: "20dvw",
					top: "0",
					left: "0",
				})}
			>
				<Image src="/decoration/blue.svg" alt="blue" fill sizes="100vw" />
			</div>
			<div
				className={css({
					position: "absolute",
					width: "20dvw",
					height: "20dvw",
					top: "0",
					left: "0",
				})}
			>
				<Image src="/decoration/green.svg" alt="green" fill sizes="100vw" />
			</div>
			<div
				className={css({
					position: "absolute",
					width: "20dvw",
					height: "20dvw",
					top: "0",
					left: "0",
				})}
			>
				<Image src="/decoration/red.svg" alt="red" fill sizes="100vw" />
			</div>
		</div>
    );
};
