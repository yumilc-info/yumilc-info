import { css } from "../../styled-system/css";
import Link from "next/link";

// consts
import {
	Montserrat400,
	ZenMaruGothic400,
	ZenMaruGothic500,
} from "@/const/font";

interface WorksTextProps {
	heading: string;
	description: string;
	link: string;
}

const worksMargin = css({
	marginBottom: "20px",
});

const worksTextMargin = css({
	marginLeft: {
		base: "15px",
		lg: "1.5dvw",
	},
});

const worksLinkStyle = css({
	fontSize: {
		base: "20px",
		lg: "2dvw",
	},
	color: "#4C4C4C",
	textDecorationLine: "underline",
	textAlign: "right",
});

const aboutTextStyle = css({
	color: "#4C4C4C",
	letterSpacing: "0.1em",
	lineHeight: "2em",
	fontSize: {
		base: "16px",
		lg: "1.6dvw",
	},
});

export const WorksText = ({
	heading,
	description,
	link,
}: WorksTextProps): JSX.Element => {
	return (
		<div className={worksMargin}>
			<h1 className={`${ZenMaruGothic500.className} ${aboutTextStyle}`}>
				{heading}
			</h1>
			<div
				className={`${ZenMaruGothic400.className} ${aboutTextStyle} ${worksTextMargin}`}
				style={{ whiteSpace: "pre-wrap" }}
			>
				{description}
			</div>
			<div className={`${Montserrat400.className} ${worksLinkStyle}`}>
				<Link href={link} target="_blank">
					More
				</Link>
			</div>
		</div>
	);
};
