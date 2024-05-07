"use client";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { css } from "../../../../styled-system/css";

// components
import { SnsImageLink } from "@/components/ContactsImageLink";
import { TopPageBackGround } from "@/components/TopPageBackGround";
import { HoverGrowWrapper } from "@/components/HoverGrowWrapper";

// consts
import { Montserrat900 } from "@/const/font";
import { snsX, snsInstagram, snsYoutube } from "@/const/TopPageText";

// images

const mainStyle = css({
	top: "0",
	position: "relative",
	md: {
		width: "767px",
	},
	margin: "0 auto",
	padding: {
		base: "0 6dvw",
		md: "0 20px",
	},
});

const headingStyle = css({
	fontSize: {
		base: "36px",
		md: "40px",
	},
	color: "#4C4C4C",
});

const snsFlex = css({
	display: "flex",
	justifyContent: "space-between",
	flexDirection: "row",
	margin: "20px 0",
});

export default function Home(): JSX.Element {
	return (
		<div>
			<div className={mainStyle}>
				<div>
					<h1 className={`${Montserrat900.className} ${headingStyle}`}>SNS</h1>
					<div className={snsFlex}>
						<div className={css({ flex: 1 })}>
							<HoverGrowWrapper>
								<SnsImageLink
									image={snsX.image}
									description={snsX.description}
									link={snsX.link}
								/>
							</HoverGrowWrapper>
						</div>
						<div className={css({ flex: 1 })}>
							<HoverGrowWrapper>
								<SnsImageLink
									image={snsInstagram.image}
									description={snsInstagram.description}
									link={snsInstagram.link}
								/>
							</HoverGrowWrapper>
						</div>
						<div className={css({ flex: 1 })}>
							<HoverGrowWrapper>
								<SnsImageLink
									image={snsYoutube.image}
									description={snsYoutube.description}
									link={snsYoutube.link}
								/>
							</HoverGrowWrapper>
						</div>
					</div>
				</div>
			</div>
			<TopPageBackGround />
		</div>
	);
}
