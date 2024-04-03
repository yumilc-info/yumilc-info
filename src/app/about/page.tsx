"use client";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { css } from "../../../styled-system/css";
import Image from "next/image";

// components
import { Header } from "@/components/Header";

// consts
import { useSmToMdQuery } from "@/const/breakpoint";
import { menuItems } from "@/const/headerMenuItem";
import { Montserrat400, ZenMaruGothic400 } from "@/const/font";
import {
	profileText,
	careerText,
	skillsText,
	hobbiesText,
} from "@/const/AboutPageText";

// images
import yumic from "public/yumilc.jpg";

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
		base: "36px",
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

const textStyle = css({
	color: "#4C4C4C",
	letterSpacing: "0.1em",
	lineHeight: "2em",
	fontSize: {
		base: "14px",
		md: "16px",
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

export default function Home(): JSX.Element {
	const isMd = useSmToMdQuery();
	return (
		<div>
			<Header menuItems={menuItems} />
			<div className={mainStyle}>
				<div className={marginBottom}>
					<h1 className={`${Montserrat400.className} ${headingStyle}`}>
						Profile
					</h1>
					{isMd ? (
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
									{profileText}
								</div>
							</div>
						</div>
					) : (
						<div className={aboutFlex}>
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
									{profileText}
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
								className={`${ZenMaruGothic400.className} ${textStyle}`}
								style={{ whiteSpace: "pre-wrap" }}
							>
								{careerText.events.map((events, index) => (
									<tr key={index}>
										<td
											className={css({
												paddingRight: "10px",
												verticalAlign: "baseline",
											})}
										>
											{events.year}
										</td>
										<td
											className={css({
												verticalAlign: "baseline",
											})}
										>
											{events.text}
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
							className={`${ZenMaruGothic400.className} ${textStyle}`}
							style={{ whiteSpace: "pre-wrap" }}
						>
							<ul className={css({ listStyle: "circle" })}>
								{skillsText.skills.map((skill, index) => (
									<li key={index}>{skill.text}</li>
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
							className={`${ZenMaruGothic400.className} ${textStyle}`}
							style={{ whiteSpace: "pre-wrap" }}
						>
							<ul className={css({ listStyle: "circle" })}>
								{hobbiesText.hobbies.map((hobby, index) => (
									<li
										key={index}
										dangerouslySetInnerHTML={{ __html: hobby.text }}
									></li>
								))}
							</ul>
							etc...
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
