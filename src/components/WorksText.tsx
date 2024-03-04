//consts
import { Zen_Maru_Gothic400, Zen_Maru_Gothic500 } from "@/const/font";

interface WorksTextProps {
	heading: string;
	description: string;
}

export const WorksText = ({ heading, description }: WorksTextProps) => {
	return (
		<div>
			<h1 className={`${Zen_Maru_Gothic500.className}`}>{heading}</h1>
			<div
				className={`${Zen_Maru_Gothic400.className}`}
				style={{ whiteSpace: "pre-wrap" }}
			>
				{description}
			</div>
		</div>
	);
};
