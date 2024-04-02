import { css } from "../../styled-system/css";
import Link from "next/link";

// components
import { HoverGrowWrapper } from "./HoverGrowWrapper";

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
	},
	color: "#4C4C4C",
	textDecorationLine: "underline",
	display: "flex",
	justifyContent: "flex-end",
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
				<HoverGrowWrapper>
					<Link href={link} target="_blank">
						More
					</Link>
				</HoverGrowWrapper>
			</div>
		</div>
	);
};
