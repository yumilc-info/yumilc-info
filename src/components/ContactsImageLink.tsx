import Image from "next/image";
import Link from "next/link";
import { css } from "../../styled-system/css";

// consts
import { Montserrat400 } from "../const/font";
import { aboutTextStyle } from "@/app/page";

interface ContactsImageLinkProps {
	image: string;
	description: string;
	link: string;
}
const contactsImageStyle = css({
	width: "10dvw",
});

export const ContactsImageLink = ({
	image,
	description,
	link,
}: ContactsImageLinkProps): JSX.Element => {
	return (
		<Link href={link} target="_blank">
			<div
				className={css({
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					marginBottom: "30px",
				})}
			>
				<div className={contactsImageStyle}>
					<Image src={image} alt={description} />
				</div>
				<div
					className={`${Montserrat400.className} ${aboutTextStyle} ${css({ margin: "10px 0" })}`}
				>
					{description}
				</div>
			</div>
		</Link>
	);
};
