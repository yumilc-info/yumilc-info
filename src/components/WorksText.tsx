// consts
import { ZenMaruGothic400, ZenMaruGothic500 } from "@/const/font";

interface WorksTextProps {
	heading: string;
	description: string;
}

export const WorksText = ({
	heading,
	description,
}: WorksTextProps): JSX.Element => {
	return (
		<div>
			<h1 className={`${ZenMaruGothic500.className}`}>{heading}</h1>
			<div
				className={`${ZenMaruGothic400.className}`}
				style={{ whiteSpace: "pre-wrap" }}
			>
				{description}
			</div>
		</div>
	);
};
