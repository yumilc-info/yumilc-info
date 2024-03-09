import Image from "next/image";
import { css } from "../../styled-system/css";

const BackGroundStyle = css({
	position: "absolute",
	zIndex: "-1000",
	width: "100%",
	height: "calc(100% - 70px)",
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
					width: "30dvw",
					height: "30dvw",
					top: "26dvw",
					left: "-1dvw",
				})}
			>
				<Image src="/decoration/gray.svg" alt="gray" fill sizes="100vw" />
			</div>
			<div
				className={css({
					position: "absolute",
					width: "4.5dvw",
					height: "4.5dvw",
					top: "5dvw",
					left: "21dvw",
				})}
			>
				<Image src="/decoration/blue_d.svg" alt="blue_d" fill sizes="100vw" />
			</div>
			<div
				className={css({
					position: "absolute",
					width: "4.5dvw",
					height: "4.5dvw",
					top: "21dvw",
					left: "88dvw",
				})}
			>
				<Image src="/decoration/green_u.svg" alt="green_u" fill sizes="100vw" />
			</div>
			<div
				className={css({
					position: "relative",
					width: "4.5dvw",
					height: "4.5dvw",
					top: "45dvw",
					left: "60dvw",
				})}
			>
				<Image src="/decoration/red_u.svg" alt="red_u" fill sizes="100vw" />
			</div>
			<div
				className={css({
					position: "relative",
					width: "70px",
					height: "70px",
					top: {
						base: "205dvw",
						sm: "85dvw",
						md: "75dvw",
					},
					left: "2dvw",
				})}
			>
				<Image
					src="/decoration/hamiltonian.svg"
					alt="hamiltonian"
					fill
					sizes="100vw"
				/>
			</div>

			<div
				className={css({
					position: "absolute",
					width: "60px",
					height: "60px",
					top: {
						base: "220dvw",
						sm: "98dvw",
						md: "98dvw",
					},
					left: "88dvw",
				})}
			>
				<Image src="/decoration/e.svg" alt="e" fill sizes="100vw" />
			</div>
			<div
				className={css({
					position: "absolute",
					width: "calc(560px - 5dvw)",
					height: "calc(560px - 5dvw)",
					md: {
						top: "98dvw",
					},
					sm: {
						top: "100dvw",
					},
					base: {
						bottom: "calc(1100px - 20dvw)",
					},
					left: "calc(-300px + 10dvw)",
				})}
			>
				<Image src="/decoration/yellow.svg" alt="yellow" fill sizes="100vw" />
			</div>
			<div
				className={css({
					position: "absolute",
					width: "calc(560px - 5dvw)",
					height: "calc(560px - 5dvw)",
					md: {
						top: "120dvw",
					},
					sm: {
						top: "130dvw",
					},
					base: {
						bottom: "600px",
					},
					right: "calc(-200px + 5dvw)",
				})}
			>
				<Image src="/decoration/pink.svg" alt="pink" fill sizes="100vw" />
			</div>
			<div
				className={css({
					position: "absolute",
					width: "60px",
					height: "60px",
					bottom: {
						md: "210px",
						sm: "200px",
						base: "500px",
					},
					right: "3dvw",
				})}
			>
				<Image
					src="/decoration/lagrangian.svg"
					alt="lagrangian"
					fill
					sizes="100vw"
				/>
			</div>
		</div>
	);
};
