import Image from "next/image";
import Link from "next/link";
import { css } from "../../styled-system/css";

// consts
import { Montserrat400 } from "../const/font";
import { useSmQuery } from "../const/breakpoint";

interface SnsImageLinkProps {
	image: string;
	description: string;
	link: string;
}
const snsImageStyle = css({
	position: "relative",
	width: "100%",
	height: ["15dvw", "100px"],
});
const aboutTextStyle = css({
	color: "#4C4C4C",
	letterSpacing: "0.1em",
	lineHeight: "2em",
	fontSize: {
		base: "14px",
		md: "16px",
	},
});

export const SnsImageLink = ({
	image,
	description,
	link,
}: SnsImageLinkProps): JSX.Element => {
	const isSm = useSmQuery();
	return (
		<Link href={link} target="_blank">
			<div
				className={css({
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					marginBottom: "30px",
				})}
			>
				<div className={snsImageStyle}>
					<Image src={image} alt={description} fill sizes="100vw" />
				</div>
				{!isSm && (
					<div
						className={`${Montserrat400.className} ${aboutTextStyle} ${css({ margin: "10px 0" })}`}
					>
						{description}
					</div>
				)}
			</div>
		</Link>
	);
};
