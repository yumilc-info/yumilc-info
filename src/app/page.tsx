"use client";

import { css } from "../../styled-system/css";
import Link from "next/link";
import Image from "next/image";

// components
import { WorksText } from "../components/WorksText";
import { SnsImageLink } from "../components/ContactsImageLink";
import { TopPageBackGround } from "../components/TopPageBackGround";
import { HoverGrowWrapper } from "../components/HoverGrowWrapper";

// consts
import { useSmQuery } from "../const/breakpoint";
import { Montserrat400, Montserrat900, ZenMaruGothic400 } from "../const/font";
import { bodyTextStyle } from "../const/textStyles";
import { formatDate } from "../libs/formatDate";
import { type RawNewsEntry, normalizeNewsEntries } from "../libs/newsFormat";

import eventsData from "../../content/events/events.json";
import topContentRaw from "../../content/pages/top.json";
import newsData from "../../content/news/news.json";
import yumilc from "../../public/yumilc.jpg";

type TopLink = {
	label: string;
	href: string;
};

type TopWork = {
	heading: string;
	description: string;
	link: string;
};

type TopSns = {
	image: string;
	description: string;
	link: string;
};

type TopContact = {
	text: string;
	link: string;
	buttonLabel: string;
};

type TopContent = {
	about: {
		text: string;
		links: TopLink[];
	};
	works: TopWork[];
	sns: TopSns[];
	contact: TopContact;
};

const topContent = topContentRaw as TopContent;
const EVENTS_EMPTY_MESSAGE = "次のイベントをお楽しみに！";
const NEWS_EMPTY_MESSAGE = "現在お知らせはありません。";

const normalizeUpcomingEvents = (entries: RawNewsEntry[]) => {
	const today = new Date();
	today.setHours(0, 0, 0, 0);

	return normalizeNewsEntries(entries).filter((entry) => {
		const eventDate = new Date(entry.publishedAt);
		eventDate.setHours(0, 0, 0, 0);
		return eventDate.getTime() >= today.getTime();
	});
};

const sortEventsChronologically = (entries: RawNewsEntry[]) =>
	normalizeUpcomingEvents(entries).sort(
		(a, b) =>
			new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime(),
	);

const eventEntries = sortEventsChronologically(eventsData as RawNewsEntry[]);
const newsEntries = normalizeNewsEntries(newsData as RawNewsEntry[]);

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

const snsItemStyle = css({
	flex: 1,
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

const newsSectionStyle = css({
	marginBottom: "40px",
});

const newsListStyle = css({
	marginTop: "20px",
	border: "1px solid #CACACA",
	borderRadius: "16px",
	padding: "12px 20px",
	backgroundColor: "rgba(255,255,255,0.9)",
	maxHeight: "220px",
	overflowY: "auto",
});

const newsItemStyle = css({
	display: "flex",
	alignItems: "flex-start",
	gap: "16px",
	padding: "12px 0",
	borderBottom: "1px solid #E0E0E0",
	flexWrap: {
		base: "wrap",
		md: "nowrap",
	},
	"&:last-of-type": {
		borderBottom: "none",
	},
});

const newsDateStyle = css({
	color: "#4C4C4C",
	fontWeight: 600,
	letterSpacing: "0.06em",
	minWidth: {
		base: "auto",
		md: "120px",
	},
	fontSize: {
		base: "14px",
		md: "16px",
	},
	flexShrink: 0,
	lineHeight: "1.8",
});

const newsBodyStyle = css({
	flex: 1,
	color: "#4C4C4C",
	lineHeight: "1.8",
	fontSize: {
		base: "14px",
		md: "16px",
	},
	"& p": {
		margin: 0,
	},
	"& a": {
		textDecoration: "underline",
		color: "#4C4C4C",
	},
});

const newsEmptyStyle = css({
	color: "#4C4C4C",
	padding: "12px 0",
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

export default function Home() {
	const isSm = useSmQuery();
	const hasEvents = eventEntries.length > 0;
	const hasNews = newsEntries.length > 0;
	const { about, works, sns, contact: contactInfo } = topContent;

	return (
		<div>
			<div className={keywordAreaStyle}>
				<div className={keywordStyle}>
					<Image src="/decoration/keyword.svg" alt="keyword" fill />
				</div>
			</div>
			<div className={mainStyle}>
				<div className={newsSectionStyle}>
					<h1 className={`${Montserrat900.className} ${headingStyle}`}>
						Event
					</h1>
					<div className={newsListStyle}>
						{hasEvents ? (
							eventEntries.map((entry, index) => (
								<div
									key={`event-${entry.publishedAt}-${index}`}
									className={newsItemStyle}
								>
									<div
										className={`${Montserrat400.className} ${newsDateStyle}`}
									>
										{formatDate(entry.publishedAt)}
									</div>
									<div
										className={`${ZenMaruGothic400.className} ${newsBodyStyle}`}
										dangerouslySetInnerHTML={{ __html: entry.bodyHtml }}
									/>
								</div>
							))
						) : (
							<div
								className={`${ZenMaruGothic400.className} ${newsEmptyStyle}`}
							>
								{EVENTS_EMPTY_MESSAGE}
							</div>
						)}
					</div>
				</div>
				<div className={newsSectionStyle}>
					<h1 className={`${Montserrat900.className} ${headingStyle}`}>News</h1>
					<div className={newsListStyle}>
						{hasNews ? (
							newsEntries.map((entry, index) => (
								<div
									key={`news-${entry.publishedAt}-${index}`}
									className={newsItemStyle}
								>
									<div
										className={`${Montserrat400.className} ${newsDateStyle}`}
									>
										{formatDate(entry.publishedAt)}
									</div>
									<div
										className={`${ZenMaruGothic400.className} ${newsBodyStyle}`}
										dangerouslySetInnerHTML={{ __html: entry.bodyHtml }}
									/>
								</div>
							))
						) : (
							<div
								className={`${ZenMaruGothic400.className} ${newsEmptyStyle}`}
							>
								{NEWS_EMPTY_MESSAGE}
							</div>
						)}
					</div>
				</div>
				<div className={marginBottom}>
					{/* <h1 className={`${Montserrat900.className} ${headingStyle}`}>
						About
					</h1> */}
					{isSm ? (
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
							<div className={aboutMargin}>
								<div
									className={`${ZenMaruGothic400.className} ${bodyTextStyle}`}
									style={{ whiteSpace: "pre-wrap" }}
								>
									{about.text}
								</div>
								<div className={aboutLinkFlex}>
									{about.links.map((link) => (
										<div
											className={`${Montserrat400.className} ${aboutLinkStyle}`}
											key={link.href}
										>
											<HoverGrowWrapper>
												<Link href={link.href}>{link.label}</Link>
											</HoverGrowWrapper>
										</div>
									))}
								</div>
							</div>
						</div>
					) : (
						<div className={aboutFlex}>
							<div className={aboutMargin}>
								<div
									className={`${ZenMaruGothic400.className} ${bodyTextStyle}`}
									style={{ whiteSpace: "pre-wrap" }}
								>
									{about.text}
								</div>
								<div className={aboutLinkFlex}>
									{about.links.map((link) => (
										<div
											className={`${Montserrat400.className} ${aboutLinkStyle}`}
											key={link.href}
										>
											<HoverGrowWrapper>
												<Link href={link.href}>{link.label}</Link>
											</HoverGrowWrapper>
										</div>
									))}
								</div>
							</div>

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
						</div>
					)}
				</div>
				<div className={marginBottom}>
					<h1 className={`${Montserrat900.className} ${headingStyle}`}>
						Works
					</h1>
					<div className={worksMargin}>
						{works.map((work) => (
							<WorksText
								key={work.link}
								heading={work.heading}
								description={work.description}
								link={work.link}
							/>
						))}
					</div>
				</div>
				<div>
					<h1 className={`${Montserrat900.className} ${headingStyle}`}>SNS</h1>
					<div className={snsFlex}>
						{sns.map((item) => (
							<div className={snsItemStyle} key={item.link}>
								<HoverGrowWrapper>
									<SnsImageLink
										image={item.image}
										description={item.description}
										link={item.link}
									/>
								</HoverGrowWrapper>
							</div>
						))}
					</div>
				</div>
				<div>
					<h1 className={`${Montserrat900.className} ${headingStyle}`}>
						Contact
					</h1>
					<div className={contactLinkStyle}>
						<div
							className={`${ZenMaruGothic400.className} ${bodyTextStyle}`}
							style={{ whiteSpace: "pre-wrap" }}
						>
							{contactInfo.text}
						</div>
						<HoverGrowWrapper>
							<Link
								href={contactInfo.link}
								className={`${Montserrat400.className} ${contactButtonStyle}`}
							>
								{contactInfo.buttonLabel}
							</Link>
						</HoverGrowWrapper>
					</div>
				</div>
			</div>
			<TopPageBackGround />
		</div>
	);
}
