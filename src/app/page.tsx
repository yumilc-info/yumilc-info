"use client";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { css } from "../../styled-system/css";
import Link from "next/link";
import Image from "next/image";

// components
import { WorksText } from "@/components/WorksText";
import { SnsImageLink } from "@/components/ContactsImageLink";
import { TopPageBackGround } from "@/components/TopPageBackGround";
import { HoverGrowWrapper } from "@/components/HoverGrowWrapper";

// consts
import { useSmQuery } from "@/const/breakpoint";
import { Montserrat400, Montserrat900, ZenMaruGothic400 } from "@/const/font";
import {
	aboutText,
	worksScienceCommunicator,
	worksTsubuya,
	worksTsukubaPlaceLab,
	worksTsukubaConnect,
	worksChikyulabel,
	worksInclusiveProject,
	snsX,
	snsInstagram,
	snsYoutube,
	contact,
	textStyle,
} from "@/const/TopPageText";

// images
import yumic from "public/yumilc.jpg";

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

const aboutLinkStyle = css({
	fontSize: {
		base: "16px",
		md: "20px",
	},
	color: "#4C4C4C",
	textDecorationLine: "underline",
});

const aboutFlex = css({
	display: "flex",
	justifyContent: "space-between",
});
const aboutLinkFlex = css({
	display: "flex",
	justifyContent: "space-around",
	margin: "20px 0",
});

const profileImageStyle = css({
	flex: 1,
	width: {
		smToMd: "50dvw",
		base: "auto",
	},
	margin: {
		md: 0,
		smToMd: "20px auto",
		base: "20px 70px",
	},
});

const aboutMargin = css({
	paddingLeft: {
		base: "30px",
	},
	paddingRight: "30px",
	flex: 2,
});

const worksMargin = css({
	padding: {
		base: "0 30px",
	},
});

const snsFlex = css({
	display: "flex",
	justifyContent: "space-between",
	flexDirection: "row",
	margin: "20px 0",
});

const keywordAreaStyle = css({
	position: "relative",
	width: "100dvw",
	height: {
		sm: "60dvw",
		base: "65dvw",
	},
	top: "70px",
	left: "0",
});

const keywordStyle = css({
	position: "relative",
	width: "58dvw",
	height: "18dvw",
	left: "12dvw",
	top: "15dvw",
});

const marginBottom = css({
	marginBottom: "40px",
});

const contactLinkStyle = css({
	fontSize: {
		base: "16px",
		md: "20px",
	},
	color: "#4C4C4C",
	textAlign: "center",
	padding: "20px",
	margin: "0 auto",
	maxWidth: "600px",
	lineHeight: "1.8",
});

const contactButtonStyle = css({
	display: "inline-block",
	padding: "12px 24px",
	backgroundColor: "#4C4C4C",
	color: "white",
	borderRadius: "8px",
	textDecoration: "none",
	transition: "all 0.3s ease",
	marginTop: "20px",
	"&:hover": {
		backgroundColor: "#666666",
		transform: "translateY(-2px)",
	},
});

export default function Home(): JSX.Element {
	const isSm = useSmQuery();
	return (
		<div>
			<div className={keywordAreaStyle}>
				<div className={keywordStyle}>
					<Image src="/decoration/keyword.svg" alt="keyword" fill />
				</div>
			</div>
			<div className={mainStyle}>
				<div className={marginBottom}>
					<h1 className={`${Montserrat900.className} ${headingStyle}`}>
						About
					</h1>
					{isSm ? (
						<div>
							<div className={profileImageStyle}>
								<Image
									src={yumic}
									alt="yumilc"
									style={{
										maxWidth: "100%",
										height: "auto",
									}}
								/>
							</div>
							<div className={aboutMargin}>
								<div
									className={`${ZenMaruGothic400.className} ${textStyle}`}
									style={{ whiteSpace: "pre-wrap" }}
								>
									{aboutText}
								</div>
								<div className={aboutLinkFlex}>
									<div
										className={`${Montserrat400.className} ${aboutLinkStyle}`}
									>
										<HoverGrowWrapper>
											<Link href="/about">Yumilc's Profile</Link>
										</HoverGrowWrapper>
									</div>
									<div
										className={`${Montserrat400.className} ${aboutLinkStyle}`}
									>
										<HoverGrowWrapper>
											<Link href="/news">News</Link>
										</HoverGrowWrapper>
									</div>
								</div>
							</div>
						</div>
					) : (
						<div className={aboutFlex}>
							<div className={aboutMargin}>
								<div
									className={`${ZenMaruGothic400.className} ${textStyle}`}
									style={{ whiteSpace: "pre-wrap" }}
								>
									{aboutText}
								</div>
								<div className={aboutLinkFlex}>
									<div
										className={`${Montserrat400.className} ${aboutLinkStyle}`}
									>
										<HoverGrowWrapper>
											<Link href="/about">Yumilc's Profile</Link>
										</HoverGrowWrapper>
									</div>
									<div
										className={`${Montserrat400.className} ${aboutLinkStyle}`}
									>
										<HoverGrowWrapper>
											<Link href="/news">News</Link>
										</HoverGrowWrapper>
									</div>
								</div>
							</div>

							<div className={profileImageStyle}>
								<Image
									src={yumic}
									alt="yumilc"
									style={{
										maxWidth: "100%",
										height: "auto",
									}}
								/>
							</div>
						</div>
					)}
				</div>
				<div className={marginBottom}>
					<h1 className={`${Montserrat900.className} ${headingStyle}`}>
						Works
					</h1>
					<div className={worksMargin}>
						<WorksText
							heading={worksScienceCommunicator.heading}
							description={worksScienceCommunicator.text}
							link={worksScienceCommunicator.link}
						/>
						<WorksText
							heading={worksTsubuya.heading}
							description={worksTsubuya.text}
							link={worksTsubuya.link}
						/>
						<WorksText
							heading={worksTsukubaPlaceLab.heading}
							description={worksTsukubaPlaceLab.text}
							link={worksTsukubaPlaceLab.link}
						/>
						<WorksText
							heading={worksTsukubaConnect.heading}
							description={worksTsukubaConnect.text}
							link={worksTsukubaConnect.link}
						/>
						<WorksText
							heading={worksChikyulabel.heading}
							description={worksChikyulabel.text}
							link={worksChikyulabel.link}
						/>
						<WorksText
							heading={worksInclusiveProject.heading}
							description={worksInclusiveProject.text}
							link={worksInclusiveProject.link}
						/>
					</div>
				</div>
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
				<div>
					<h1 className={`${Montserrat900.className} ${headingStyle}`}>
						Contact
					</h1>
					<div className={contactLinkStyle}>
						<div
							className={`${ZenMaruGothic400.className} ${textStyle}`}
							style={{ whiteSpace: "pre-wrap" }}
						>
							{contact.text}
						</div>
						<HoverGrowWrapper>
							<Link
								href={contact.link}
								className={`${Montserrat400.className} ${contactButtonStyle}`}
							>
								Contact Page
							</Link>
						</HoverGrowWrapper>
					</div>
				</div>
			</div>
			<TopPageBackGround />
		</div>
	);
}
