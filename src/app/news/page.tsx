import Link from "next/link";
import { getList } from "@/libs/microcms";
import { css } from "../../../styled-system/css";
import sanitizeHtml from "sanitize-html";

// components

// consts
import { Montserrat400, ZenMaruGothic400 } from "@/const/font";
import { formatDate } from "@/libs/formatDate";

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
});

const articleMargin = css({
	paddingLeft: {
		base: "0",
		md: "30px",
	},
});

const titleStyle = css({
	fontSize: {
		base: "20px",
		md: "24px",
	},
	color: "#4C4C4C",
	paddingTop: "20px",
	paddingBottom: "10px",
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

const dateStyle = css({
	color: "#4C4C4C",
	letterSpacing: "0.1em",
	lineHeight: "2em",
	fontSize: {
		base: "16px",
		md: "20px",
	},
});

const textMargin = css({
	paddingLeft: {
		base: "10px",
		md: "30px",
	},
});

const readLinkStyle = css({
	fontSize: {
		base: "16px",
		md: "20px",
	},
	color: "#4C4C4C",
	textDecorationLine: "underline",
	display: "flex",
	justifyContent: "flex-end",
});

export default async function StaticPage() {
	const { contents } = await getList();

	if (!contents || contents.length === 0) {
		return <h1>No contents</h1>;
	}

	return (
		<div>
			<div className={mainStyle}>
				<h1 className={`${Montserrat400.className} ${headingStyle}`}>News</h1>
				<div className={articleMargin}>
					{contents.map((post) => {
						const formattedDate = formatDate(post.publishedAt ?? "1900-01-01");
						const rawText = sanitizeHtml(post.content, {
							allowedTags: [],
							allowedAttributes: {},
						});
						const previewText =
							rawText.length > 150
								? `${rawText.substring(0, 150)}...`
								: rawText;

						return (
							<div key={post.id} className={css({ marginBottom: "20px" })}>
								<div
									className={css({
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
									})}
								>
									<div
										className={`${ZenMaruGothic400.className} ${titleStyle}`}
									>
										{post.title}
									</div>
									<div className={`${ZenMaruGothic400.className} ${dateStyle}`}>
										{formattedDate}
									</div>
								</div>
								<div className={textMargin}>
									<div className={`${ZenMaruGothic400.className} ${textStyle}`}>
										{previewText}
									</div>
								</div>
								<div className={`${Montserrat400.className} ${readLinkStyle}`}>
									<Link href={`/news/${post.id}`}>Read More</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
