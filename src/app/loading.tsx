import { ZenMaruGothic400 } from "@/const/font";
import { css } from "../../styled-system/css";

export default function Loading() {
	return (
		<div
			className={css({
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "100dvh",
			})}
		>
			<p
				className={`${ZenMaruGothic400.className} ${css({
					fontSize: {
						base: "32px",
						md: "36px",
					},
					color: "#4C4C4C",
				})}`}
			>
				Loading...
			</p>
		</div>
	);
}
