export const runtime = "edge";

import { notFound } from "next/navigation";
import { getDetail } from "@/libs/microcms";
import { css } from "../../../../styled-system/css";
import { formatDate } from "@/libs/formatDate";

// components

// consts
import { Montserrat400, ZenMaruGothic400 } from "@/const/font";

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

const titleStyle = css({
	fontSize: {
		base: "24px",
		md: "32px",
	},
	color: "#4C4C4C",
	paddingTop: "20px",
	paddingBottom: "10px",
});

const dateStyle = css({
	color: "#4C4C4C",
	fontSize: {
		base: "16px",
		md: "20px",
	},
	textAlign: "right",
});

const articleStyle = css({
	color: "#4C4C4C",
	letterSpacing: "0.1em",
	lineHeight: "2em",
	fontSize: {
		base: "14px",
		md: "16px",
	},
	"& p": {
		marginLeft: "10px",
	},
	"& h1": {
		fontSize: "22px",
		fontWeight: "bold",
		marginTop: "20px",
		marginBottom: "10px",
		borderBottom: "1px solid #ddd",
	},
	"& h2": {
		fontSize: "20px",
		fontWeight: "bold",
		marginTop: "20px",
		marginBottom: "10px",
		borderBottom: "1px solid #ddd",
	},
	"& h3": {
		fontSize: "18px",
		fontWeight: "bold",
		marginTop: "20px",
		marginBottom: "10px",
		borderBottom: "1px solid #ddd",
	},
	"& h4": {
		fontSize: "17px",
		fontWeight: "bold",
		marginTop: "20px",
		marginBottom: "10px",
		borderBottom: "1px solid #ddd",
	},
	"& h5": {
		fontSize: "16px",
		fontWeight: "bold",
		marginTop: "20px",
		marginBottom: "10px",
		borderBottom: "1px solid #ddd",
	},
	"& blockquote": {
		borderLeft: "5px solid #ddd",
		paddingLeft: "10px",
		marginLeft: "10px",
	},
});

export default async function StaticDetailPage({
	params: { postId },
}: {
	params: { postId: string };
}) {
	const post = await getDetail(postId);
	const formattedDate = formatDate(post.publishedAt ?? "1900-01-01");

	if (!post) {
		notFound();
	}

	return (
		<div>
			<div className={mainStyle}>
				<h1 className={`${Montserrat400.className} ${headingStyle}`}>News</h1>
				<div>
					<h1 className={`${ZenMaruGothic400.className} ${titleStyle}`}>
						{post.title}
					</h1>
					<h2 className={`${ZenMaruGothic400.className} ${dateStyle}`}>
						{formattedDate}
					</h2>
					<div
						className={`${ZenMaruGothic400.className} ${articleStyle}`}
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>
				</div>
			</div>
		</div>
	);
}
