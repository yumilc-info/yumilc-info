"use client";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { css } from "../../styled-system/css";
import Link from "next/link";
import Image from "next/image";

// components
import { Header } from "@/components/Header";
import { WorksText } from "@/components/WorksText";
import { ContactsImageLink } from "@/components/ContactsImageLink";
import { TopPageBackGround } from "@/components/TopPageBackGround";
import { HoverGrowWrapper } from "@/components/HoverGrowWrapper";

// consts
import { useSmQuery } from "@/const/breakpoint";
import { menuItems } from "@/const/headerMenuItem";
import { Montserrat400, Montserrat900, ZenMaruGothic400 } from "@/const/font";
import {
	aboutText,
	worksScienceCommunicator,
	worksTsubuya,
	worksTsukubaPlaceLab,
	worksInclusiveProject,
	contactsMail,
	contactsX,
	contactsInstagram,
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
		base: "40px",
	},
	color: "#4C4C4C",
});

const aboutLinkStyle = css({
	fontSize: {
		base: "20px",
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

const aboutTextStyle = css({
	color: "#4C4C4C",
	letterSpacing: "0.1em",
	lineHeight: "2em",
	fontSize: {
		base: "14px",
		md: "16px",
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

const contactsFlex = css({
	display: "flex",
	justifyContent: "space-between",
	flexDirection: {
		base: "column",
		sm: "row",
	},
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

export default function Home(): JSX.Element {
	const isSm = useSmQuery();
	return (
		<div>
			<Header menuItems={menuItems} />
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
									className={`${ZenMaruGothic400.className} ${aboutTextStyle}`}
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
									className={`${ZenMaruGothic400.className} ${aboutTextStyle}`}
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
							heading={worksInclusiveProject.heading}
							description={worksInclusiveProject.text}
							link={worksInclusiveProject.link}
						/>
					</div>
				</div>
				<div>
					<h1 className={`${Montserrat900.className} ${headingStyle}`}>
						Contacts
					</h1>
					<div className={contactsFlex}>
						<div className={css({ flex: 1 })}>
							<HoverGrowWrapper>
								<ContactsImageLink
									image={contactsMail.image}
									description={contactsMail.description}
									link={contactsMail.link}
								/>
							</HoverGrowWrapper>
						</div>
						<div className={css({ flex: 1 })}>
							<HoverGrowWrapper>
								<ContactsImageLink
									image={contactsX.image}
									description={contactsX.description}
									link={contactsX.link}
								/>
							</HoverGrowWrapper>
						</div>
						<div className={css({ flex: 1 })}>
							<HoverGrowWrapper>
								<ContactsImageLink
									image={contactsInstagram.image}
									description={contactsInstagram.description}
									link={contactsInstagram.link}
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
