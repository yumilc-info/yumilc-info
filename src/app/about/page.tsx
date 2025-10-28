"use client";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { css } from "../../../styled-system/css";
import Image from "next/image";

// components

// consts
import { useSmToMdQuery } from "../../const/breakpoint";
import { Montserrat400, ZenMaruGothic400 } from "../../const/font";
import { bodyTextStyle } from "../../const/textStyles";
import aboutContentRaw from "../../../content/pages/about.json";

import yumilc from "../../../public/yumilc.jpg";

const mainStyle = css({
	top: "70px",
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
		base: "32px",
		md: "36px",
	},
	color: "#4C4C4C",
	paddingTop: "20px",
	paddingBottom: "10px",
});

const aboutFlex = css({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
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
	paddingRight: {
		base: 0,
		md: "30px",
	},
	paddingLeft: {
		base: 0,
		md: "30px",
	},
});

const textMargin = css({
	flex: 2,
	paddingLeft: {
		base: "30px",
	},
});

const aboutMargin = css({
	flex: 2,
	paddingLeft: {
		base: "30px",
		md: 0,
	},
});

const marginBottom = css({
	marginBottom: "40px",
});

type CareerEvent = {
	year: string;
	text: string;
};

type Hobby = {
	text: string;
	link?: string;
};

type AboutContent = {
	profile: string;
	career: CareerEvent[];
	skills: string[];
	hobbies: Hobby[];
};

const aboutContent = aboutContentRaw as AboutContent;

export default function Home() {
	const isMd = useSmToMdQuery();
	const { profile, career, skills, hobbies } = aboutContent;
	return (
		<div>
			<div className={mainStyle}>
				<div className={marginBottom}>
					<h1 className={`${Montserrat400.className} ${headingStyle}`}>
						Profile
					</h1>
					{isMd ? (
						<div>
							<div className={profileImageStyle}>
								<Image
									src={yumilc}
									alt="yumilc"
									style={{
										maxWidth: "100%",
										height: "auto",
									}}
								/>
							</div>
							<div>
								<div
									className={`${ZenMaruGothic400.className} ${bodyTextStyle}`}
									style={{ whiteSpace: "pre-wrap" }}
								>
									{profile}
								</div>
							</div>
						</div>
					) : (
						<div className={aboutFlex}>
							<div className={profileImageStyle}>
								<Image
									src={yumilc}
									alt="yumilc"
									style={{
										maxWidth: "100%",
										height: "auto",
									}}
								/>
							</div>
							<div className={aboutMargin}>
								<div
									className={`${ZenMaruGothic400.className} ${bodyTextStyle}`}
									style={{ whiteSpace: "pre-wrap" }}
								>
									{profile}
								</div>
							</div>
						</div>
					)}
				</div>
				<div className={marginBottom}>
					<h1 className={`${Montserrat400.className} ${headingStyle}`}>
						Career
					</h1>
					<div className={textMargin}>
						<table>
							<tbody
								className={`${ZenMaruGothic400.className} ${bodyTextStyle}`}
								style={{ whiteSpace: "pre-wrap" }}
							>
								{career.map((event) => (
									<tr key={`${event.year}-${event.text}`}>
										<td
											className={css({
												paddingRight: "10px",
												verticalAlign: "baseline",
												whiteSpace: "nowrap",
											})}
										>
											{event.year}
										</td>
										<td
											className={css({
												verticalAlign: "baseline",
											})}
										>
											{event.text}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				<div className={marginBottom}>
					<h1 className={`${Montserrat400.className} ${headingStyle}`}>
						Skills
					</h1>
					<div className={textMargin}>
						<div
							className={`${ZenMaruGothic400.className} ${bodyTextStyle}`}
							style={{ whiteSpace: "pre-wrap" }}
						>
							<ul className={css({ listStyle: "circle" })}>
								{skills.map((skill) => (
									<li key={skill}>{skill}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className={marginBottom}>
					<h1 className={`${Montserrat400.className} ${headingStyle}`}>
						Hobbies
					</h1>
					<div className={textMargin}>
						<div
							className={`${ZenMaruGothic400.className} ${bodyTextStyle}`}
							style={{ whiteSpace: "pre-wrap" }}
						>
							<ul className={css({ listStyle: "circle" })}>
								{hobbies.map((hobby) => (
									<li
										key={hobby.text}
										dangerouslySetInnerHTML={{ __html: hobby.text }}
									></li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
