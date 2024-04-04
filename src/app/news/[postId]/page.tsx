export const runtime = "edge";

import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail } from "@/libs/microcms";
import { css } from "../../../../styled-system/css";
import { formatDate } from "@/libs/formatDate";

// components

// consts
import { Montserrat400 } from "@/const/font";

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
					<h1>{post.title}</h1>
					<h2>{formattedDate}</h2>
					<div>{parse(post.content)}</div>
				</div>
			</div>
		</div>
	);
}
