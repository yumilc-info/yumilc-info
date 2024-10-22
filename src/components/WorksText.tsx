import { css } from "../../styled-system/css";
import Link from "next/link";

// components
import { HoverGrowWrapper } from "./HoverGrowWrapper";
import { aboutTextStyle } from "@/app/page";

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
		base: "16px",
		md: "20px",
	},
	color: "#4C4C4C",
	textDecorationLine: "underline",
	display: "flex",
	justifyContent: "flex-end",
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
