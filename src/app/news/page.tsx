import { getNewsEntries } from "../../libs/news";
import { css } from "../../../styled-system/css";
import { formatDate } from "../../libs/formatDate";

// consts
import { Montserrat400, ZenMaruGothic400 } from "../../const/font";
import { bodyTextStyle } from "../../const/textStyles";

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
	paddingBottom: "20px",
});

export default async function StaticPage() {
	const entries = await getNewsEntries();
	const emptyMessage = "現在お知らせはありません。";

	if (!entries.length) {
		return (
			<div className={mainStyle}>
				<h1 className={`${Montserrat400.className} ${headingStyle}`}>News</h1>
				<p
					className={`${ZenMaruGothic400.className} ${css({
						color: "#4C4C4C",
						marginTop: "20px",
					})}`}
				>
					{emptyMessage}
				</p>
			</div>
		);
	}

	return (
		<div>
			<div className={mainStyle}>
				<h1 className={`${Montserrat400.className} ${headingStyle}`}>News</h1>
				<div className={articleMargin}>
					{entries.map((entry, index) => {
						const formattedDate = formatDate(entry.publishedAt);

						return (
							<div
								key={`${entry.publishedAt}-${index}`}
								className={css({ marginBottom: "20px" })}
							>
								<div className={`${ZenMaruGothic400.className} ${dateStyle}`}>
									{formattedDate}
								</div>
								<div className={textMargin}>
									<div
										className={`${ZenMaruGothic400.className} ${bodyTextStyle}`}
										dangerouslySetInnerHTML={{ __html: entry.bodyHtml }}
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
