import Link from "next/link";
import Image from "next/image";
import { css } from "../../styled-system/css";

interface SnsShareLinkProps {
	link: string;
	src: string;
	alt: string;
}

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

export const SnsShareLink = ({
	link,
	src,
	alt,
}: SnsShareLinkProps): JSX.Element => {
	return (
		<Link href={link} target="_blank">
			<div className={snsImageStyle}>
				<Image src={src} alt={alt} fill />
			</div>
		</Link>
	);
};
