import { css } from "../../styled-system/css";

// components
import { Header } from "@/components/Header";
import { WorksText } from "@/components/WorksText";

// consts
import { menuItems } from "@/const/headerMenuItem";
import { Montserrat900, ZenMaruGothic400 } from "@/const/font";
import {
	aboutText,
	scienceCommunicatorText,
	tsubuyaText,
	tsukubaPlaceLabText,
	inclusiveProjectText,
} from "@/const/TopPageText";

const mainStyle = css({
	top: "70px",
	position: "relative",
});

const headingStyle = css({
	fontSize: "40px",
	color: "#4C4C4C",
});

export default function Home(): JSX.Element {
	return (
		<div>
			<Header menuItems={menuItems} />
			<div className={mainStyle}>
				<div>
					<h1 className={`${Montserrat900.className} ${headingStyle}`}>
						About
					</h1>
					<div
						className={`${ZenMaruGothic400.className}`}
						style={{ whiteSpace: "pre-wrap" }}
					>
						{aboutText}
					</div>
				</div>
				<div>
					<h1 className={`${Montserrat900.className} ${headingStyle}`}>
						Works
					</h1>
					<div>
						<WorksText
							heading="サイエンスコミュニケーター"
							description={scienceCommunicatorText}
						/>
						<WorksText heading="粒や" description={tsubuyaText} />
						<WorksText
							heading="Tsukuba Place Lab スタッフ"
							description={tsukubaPlaceLabText}
						/>
						<WorksText
							heading="つくばインクルーシブプロジェクト"
							description={inclusiveProjectText}
						/>
					</div>
				</div>
				<div>
					<h1 className={`${Montserrat900.className} ${headingStyle}`}>
						Contacts
					</h1>
				</div>
			</div>
		</div>
	);
}
