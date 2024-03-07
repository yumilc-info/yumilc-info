"use client";

import { css } from "../../styled-system/css";
import Link from "next/link";
import Image from "next/image";

// components
import { Header } from "@/components/Header";
import { WorksText } from "@/components/WorksText";
import { ContactsImageLink } from "@/components/ContactsImageLink";

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
	top: "70px",
	position: "relative",
	margin: "0 6dvw",
});

const headingStyle = css({
	fontSize: {
		base: "40px",
		lg: "4dvw",
	},
	color: "#4C4C4C",
});

const aboutLinkStyle = css({
	fontSize: {
		base: "20px",
		lg: "2dvw",
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
	width: {
		sm: "25dvw",
		base: "auto",
	},
	margin: {
		sm: 0,
		base: "20px 70px",
	},
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

const aboutMargin = css({
	paddingLeft: {
		base: "30px",
		lg: "3dvw",
	},
	paddingRight: "30px",
	flex: 1,
});

const worksMargin = css({
	padding: {
		base: "0 30px",
		lg: "0 3dvw",
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

export default function Home(): JSX.Element {
	const isSm = useSmQuery();
	return (
		<div>
			<Header menuItems={menuItems} />
			<div className={mainStyle}>
				<div>
					<h1 className={`${Montserrat900.className} ${headingStyle}`}>
						About
					</h1>
					{isSm ? (
						<div>
							<div className={profileImageStyle}>
								<Image src={yumic} alt="yumilc" />
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
										<Link href="/about">Yumilc's Profile</Link>
									</div>
									<div
										className={`${Montserrat400.className} ${aboutLinkStyle}`}
									>
										<Link href="/news">News</Link>
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
										<Link href="/about">Yumilc's Profile</Link>
									</div>
									<div
										className={`${Montserrat400.className} ${aboutLinkStyle}`}
									>
										<Link href="/news">News</Link>
									</div>
								</div>
							</div>

							<div className={profileImageStyle}>
								<Image src={yumic} alt="yumilc" />
							</div>
						</div>
					)}
				</div>
				<div>
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
							<ContactsImageLink
								image={contactsMail.image}
								description={contactsMail.description}
								link={contactsMail.link}
							/>
						</div>
						<div className={css({ flex: 1 })}>
							<ContactsImageLink
								image={contactsX.image}
								description={contactsX.description}
								link={contactsX.link}
							/>
						</div>
						<div className={css({ flex: 1 })}>
							<ContactsImageLink
								image={contactsInstagram.image}
								description={contactsInstagram.description}
								link={contactsInstagram.link}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
