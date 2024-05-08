export const runtime = "edge";

import { notFound } from "next/navigation";
import Image from "next/image";
import { getDetail } from "@/libs/microcms";
import { css } from "../../../../styled-system/css";
import { formatDate } from "@/libs/formatDate";
import { load } from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/tokyo-night-dark.css";

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
		"& code": {
			borderRadius: "5px",
		},
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
		margin: "10px",
	},
	"& pre": {
		"& code": {
			margin: "10px",
			padding: "25px !important",
			fontSize: {
				base: "12px",
				md: "14px",
			},
			letterSpacing: "0",
			lineHeight: "normal",
			borderRadius: "10px",
		},
	},
	"& table": {
		borderCollapse: "collapse",
		margin: "10px",
	},
	"& th": {
		border: "1px solid #ddd",
		padding: "10px",
		"& p": {
			marginLeft: "0",
		},
		backgroundColor: "#f2f2f2",
	},
	"& td": {
		border: "1px solid #ddd",
		padding: "10px",
		"& p": {
			marginLeft: "0",
		},
	},
	"& ul": {
		marginLeft: "20px",
		marginTop: "10px",
		marginBottom: "10px",
		listStyleType: "circle",
	},
	"& ol": {
		marginLeft: "20px",
		marginTop: "10px",
		marginBottom: "10px",
		listStyleType: "decimal",
	},
});

const snsImageStyle = css({
	position: "relative",
	width: {
		base: "20px",
		md: "24px",
	},
	height: {
		base: "20px",
		md: "24px",
	},
	marginLeft: "10px",
});

export default async function StaticDetailPage({
	params: { postId },
}: {
	params: { postId: string };
}) {
	const post = await getDetail(postId);
	const formattedDate = formatDate(post.publishedAt ?? "1900-01-01");

	const $ = load(post.content);
	$("code").each((_, elm) => {
		const className = $(elm).attr("class");
		const language = className?.replace("language-", "");

		let result;
		if (language) {
			try {
				result = hljs.highlight($(elm).text(), { language });
			} catch (error) {
				result = hljs.highlightAuto($(elm).text());
			}
		} else {
			result = hljs.highlightAuto($(elm).text());
		}
		$(elm).html(result.value);
		$(elm).addClass("hljs");
	});
	post.content = $.html();

	if (!post) {
		notFound();
	}

	const shareText = `${post.title} - ゆーみるしー
@yumILC_`;

	return (
		<div>
			<div className={mainStyle}>
				<h1 className={`${Montserrat400.className} ${headingStyle}`}>News</h1>
				<div>
					<h1 className={`${ZenMaruGothic400.className} ${titleStyle}`}>
						{post.title}
					</h1>
					<div
						className={css({
							display: "flex",
							justifyContent: "space-between",
							marginBottom: "20px",
						})}
					>
						<h2 className={`${ZenMaruGothic400.className} ${dateStyle}`}>
							{formattedDate}
						</h2>
						<div className={css({ display: "flex" })}>
							<div>
								<a
									href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(`https://yumilc.info/news/${postId}`)}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									<div className={snsImageStyle}>
										<Image src="/sns/x.svg" alt="Xにシェアする" fill />
									</div>
								</a>
							</div>
							<div>
								<a
									href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://yumilc.info/news/${postId}`)}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									<div className={snsImageStyle}>
										<Image
											src="/sns/facebook.svg"
											alt="Facebookにシェアする"
											fill
										/>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div
						className={`${ZenMaruGothic400.className} ${articleStyle}`}
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>
					<div>
						<a href="https://iorin-io.com/intent/tweet?text=テキスト&url=URL">
							iorin-io
						</a>
						<a href="twitter.com/intent/tweet?text=テキスト&url=URL">Twitter</a>
						<a href="https://twitter.com/intent/tweet?text=テキスト&url=URL">
							Twitter2
						</a>
						<a
							href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(`https://yumilc.info/news/${postId}`)}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							Twitter3
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
