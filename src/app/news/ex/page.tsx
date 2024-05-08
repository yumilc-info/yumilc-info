/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { css } from "../../../../styled-system/css";

// components
import { SnsImageLink } from "@/components/ContactsImageLink";
import { HoverGrowWrapper } from "@/components/HoverGrowWrapper";

// consts
import { Montserrat400, Montserrat900, ZenMaruGothic400 } from "@/const/font";
import { snsX, snsInstagram, snsYoutube } from "@/const/TopPageText";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/libs/formatDate";
import { SnsShareLink } from "@/components/SnsShareLink";

// images

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

const snsFlex = css({
	display: "flex",
	justifyContent: "space-between",
	flexDirection: "row",
	margin: "20px 0",
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

export default function Home(): JSX.Element {
	const post = {
		title: "title",
		publishedAt: "2021-01-01",
		content: "<p>content</p>",
	};
	const postId = "1";
	const formattedDate = formatDate(post.publishedAt ?? "1900-01-01");
	const currentUrl = encodeURIComponent(`https://yumilc.info/news/${postId}`);
	const twitterUserName = encodeURIComponent("yumILC_");
	const shareText = encodeURIComponent(
		`${post.title} - ゆーみるしー
	@${twitterUserName}
`,
	);
	const tweetUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${currentUrl}`;
	const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;

	return (
		<div>
			<div className={mainStyle}>
				<div>
					<h1 className={`${Montserrat900.className} ${headingStyle}`}>SNS</h1>
					<div className={snsFlex}>
						<div className={css({ flex: 1 })}>
							<HoverGrowWrapper>
								<SnsImageLink
									image="/sns/x.svg"
									description={snsX.description}
									link={snsX.link}
								/>
							</HoverGrowWrapper>
						</div>
						<div className={css({ flex: 1 })}>
							<HoverGrowWrapper>
								<SnsImageLink
									image="/sns/facebook.svg"
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
							<div className={css({ flex: 1 })}>
								<HoverGrowWrapper>
									<SnsImageLink
										image="/sns/x.svg"
										description={snsX.description}
										link={snsX.link}
									/>
								</HoverGrowWrapper>
							</div>
							<div className={css({ flex: 1 })}>
								<HoverGrowWrapper>
									<SnsShareLink
										link={facebookUrl}
										src="/sns/facebook.svg"
										alt="Facebookでシェアする"
									/>
								</HoverGrowWrapper>
							</div>
							<div className={css({ flex: 1 })}>
								<HoverGrowWrapper>
									<SnsImageLink
										image="/sns/facebook.svg"
										description="Facebookでシェアする"
										link={facebookUrl}
									/>
								</HoverGrowWrapper>
							</div>
							<div className={css({ flex: 1 })}>
								<Link href={tweetUrl} target="_blank">
									<div className={snsImageStyle}>
										<Image src="/sns/x.svg" alt="Xにシェアする" fill />
									</div>
								</Link>
							</div>
							<div className={css({ flex: 1 })}>
								<Link href={facebookUrl} target="_blank">
									<div className={snsImageStyle}>
										<Image
											src="/sns/facebook.svg"
											alt="Facebookにシェアする"
											fill
										/>
									</div>
								</Link>
							</div>
						</div>
					</div>
					<div
						className={`${ZenMaruGothic400.className} ${articleStyle}`}
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>
				</div>
			</div>
		</div>
	);
}
